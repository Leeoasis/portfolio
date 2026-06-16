import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';

const baseUrl = 'http://127.0.0.1:5173';
const routes = ['/', '/projects', '/skills', '/about', '/contact'];
const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'mobile', width: 390, height: 844 },
];

await fs.mkdir('tmp-visual', { recursive: true });

const browser = await chromium.launch();
const findings = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });

  for (const route of routes) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
    await page.screenshot({
      path: `tmp-visual/${viewport.name}-${route === '/' ? 'home' : route.slice(1)}.png`,
      fullPage: true,
    });

    const metrics = await page.evaluate(() => {
      const doc = document.documentElement;
      const body = document.body;
      const visibleEls = [...document.querySelectorAll('body *')].filter((el) => {
        const style = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return style.visibility !== 'hidden' && style.display !== 'none' && rect.width > 0 && rect.height > 0;
      });

      const overflowEls = visibleEls
        .filter((el) => {
          const rect = el.getBoundingClientRect();
          return rect.right > window.innerWidth + 1 || rect.left < -1;
        })
        .slice(0, 8)
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            tag: el.tagName.toLowerCase(),
            className: el.className?.toString() || '',
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
          };
        });

      const boxes = {};
      for (const selector of ['.navbar-container', '.sidecard-container', '.content', '.home-heading', '.contact-form', '.projects-grid']) {
        const el = document.querySelector(selector);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        boxes[selector] = {
          left: Math.round(rect.left),
          top: Math.round(rect.top),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        };
      }

      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        bodyHeight: Math.round(body.getBoundingClientRect().height),
        overflowEls,
        boxes,
      };
    });

    if (metrics.scrollWidth > metrics.clientWidth + 1 || metrics.overflowEls.length) {
      findings.push({ route, viewport: viewport.name, ...metrics });
    }
  }

  await page.close();
}

await browser.close();

console.log(JSON.stringify({ findings }, null, 2));
