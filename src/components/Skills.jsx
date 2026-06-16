import React from 'react'
import Node from '../assets/node2.png'
import Rails from '../assets/rails.png'
import ReactImg from '../assets/react.png'
import Git from '../assets/git.png'
import Swagger from '../assets/swagger.png' 
import Postman from '../assets/postman.png'
import Postgres from '../assets/postgres.png'
import Jest from '../assets/jest.png'
import JQuery from '../assets/jquery.png'
import Django from '../assets/django.png'
import Bootstrap from '../assets/bootstrap.png'
import { SiExpo, SiReact, SiTailwindcss, SiTypescript, SiWordpress } from 'react-icons/si'
import { TbRoute } from 'react-icons/tb'

const skills = [
  { name: 'HTML', level: 'Expert', badge: 'sk-ex', width: '100%' },
  { name: 'CSS', level: 'Expert', badge: 'sk-ex', width: '100%' },
  { name: 'JavaScript', level: 'Advanced', badge: 'sk-av', width: '88%' },
  { name: 'Ruby', level: 'Advanced', badge: 'sk-av', width: '86%' },
  { name: 'PostgreSQL', level: 'Advanced', badge: 'sk-av', width: '82%' },
  { name: 'Figma', level: 'Advanced', badge: 'sk-av', width: '80%' },
  { name: 'WordPress', level: 'Expert', badge: 'sk-ex', width: '92%' },
  { name: 'Python', level: 'Intermediate', badge: 'sk-inter', width: '66%' },
  { name: 'Node JS', level: 'Intermediate', badge: 'sk-inter', width: '68%' },
  { name: 'React Native', level: 'Learning', badge: 'sk-learning', width: '45%' },
];

const Skills = () => {
  return (
    <div className="home-div">
      <div className="content">
        <div className="heading">
          <div className="skills-container">
            <div className="section-title">
              <h2>Skills</h2>
            </div>  
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill">{skill.name} <span className={`val sk ${skill.badge}`}>{skill.level}</span></span>
                  <div className="progress bar" role="progressbar" aria-label={`${skill.name} ${skill.level}`}>
                    <div className="progress-bar custom-color" style={{ width: skill.width }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="learning-card">
            <div>
              <span className="learning-label">Currently learning</span>
              <h3>React Native mobile development</h3>
              <p>I am building on my React foundation with Expo, React Navigation, mobile-first UI patterns, NativeWind styling, device testing, and TypeScript-friendly app structure. Same logic muscles, smaller screens, more opinions from thumbs.</p>
            </div>
            <div className="learning-pills">
              <span>Expo</span>
              <span>React Navigation</span>
              <span>NativeWind</span>
              <span>Mobile UI</span>
            </div>
          </div>
          <div className="wordpress-card">
            <div>
              <span className="learning-label">WordPress strength</span>
              <h3>Custom templates, Local workflows, and clean site builds</h3>
              <p>I can develop custom WordPress templates using Local, customize existing themes, and build polished sites from WordPress-provided templates. Sometimes the fastest path is custom code; sometimes it is knowing which template not to fight.</p>
            </div>
            <div className="learning-pills">
              <span>Local</span>
              <span>Custom templates</span>
              <span>Theme customization</span>
              <span>WordPress CMS</span>
            </div>
          </div>
          <div className="interests-container">
            <div className="section-title">
              <h2 className="interests-title">Interests</h2>
            </div>
            <div className="interests-grid">
              <div>
                <div className="icon-box">
                 <img src={Bootstrap} alt="Boostrap logo" style={{ width: "30px", height: "30px"}}></img>
                 <h3>Bootstrap</h3>
                </div>
              </div>
              <div>
                <div className="icon-box highlight-skill">
                  <SiWordpress aria-hidden="true" />
                  <h3>WordPress</h3>
                </div>
              </div>
              <div>
                <div className="icon-box">
                  <SiTailwindcss aria-hidden="true" />
                  <h3>Tailwind CSS</h3>
                </div>
              </div>
              <div>
                <div className="icon-box">
                  <img src={Node} alt="Node js logo" style={{ width: "30px", height: "30px"}} />
                  <h3>NodeJS</h3>
                </div>
              </div>
              <div>
                <div className="icon-box">
                  <img src={Rails} alt="Rails logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Rails</h3>
                </div>
              </div>
              <div>
                <div className="icon-box longer">
                  <img src={ReactImg} alt="React logo" style={{ width: "30px", height: "30px"}} />
                  <h3>React & Redux</h3>
                </div>
              </div>
              <div>
                <div className="icon-box highlight-skill">
                  <SiReact aria-hidden="true" />
                  <h3>React Native</h3>
                </div>
              </div>
              <div>
                <div className="icon-box highlight-skill">
                  <SiExpo aria-hidden="true" />
                  <h3>Expo</h3>
                </div>
              </div>
              <div>
                <div className="icon-box highlight-skill">
                  <TbRoute aria-hidden="true" />
                  <h3>React Navigation</h3>
                </div>
              </div>
              <div>
                <div className="icon-box highlight-skill">
                  <SiTypescript aria-hidden="true" />
                  <h3>TypeScript</h3>
                </div>
              </div>
              <div>
                <div className="icon-box longer">
                  <img src={Git} alt="Github logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Git & Github</h3>
                </div>
              </div>
              <div>
                <div className="icon-box">
                  <img src={Swagger} alt="Swagger logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Swagger</h3>
                </div>
              </div>
              <div>
                <div className="icon-box">
                  <img src={Postman} alt="Postman logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Postman</h3>
                </div>
              </div>
              <div>
                <div className="icon-box longer">
                  <img src={Postgres} alt="Postgres logo" style={{ width: "30px", height: "30px"}} />
                  <h3>PostgreSQL / pgAdmin</h3>
                </div>
              </div>
              <div>
                <div className="icon-box">
                  <img src={Jest} alt="Jest logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Jest</h3>
                </div>
              </div>
              <div>
                <div className="icon-box">
                  <img src={JQuery} alt="JQuery logo" style={{ width: "30px", height: "30px"}} />
                  <h3>JQuery</h3>
                </div>
              </div>
              <div>
                <div className="icon-box">
                  <img src={Django} alt="Python django logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Django</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
