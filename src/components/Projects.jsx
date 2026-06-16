import React, { useEffect, useRef, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectsData from './ProjectsData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const carouselRef = useRef(null);
  const [carouselState, setCarouselState] = useState({
    activePage: 0,
    totalPages: 1,
    canScrollPrevious: false,
    canScrollNext: false,
  });

  const updateCarouselState = () => {
    if (!carouselRef.current) return;

    const { clientWidth, scrollLeft, scrollWidth } = carouselRef.current;
    const maxScroll = Math.max(scrollWidth - clientWidth, 0);

    setCarouselState({
      activePage: maxScroll === 0 ? 0 : Math.round(scrollLeft / clientWidth),
      totalPages: Math.max(Math.ceil(scrollWidth / clientWidth), 1),
      canScrollPrevious: scrollLeft > 4,
      canScrollNext: scrollLeft < maxScroll - 4,
    });
  };

  const scrollProjects = (direction) => {
    if (!carouselRef.current) return;

    const { clientWidth } = carouselRef.current;
    carouselRef.current.scrollBy({
      left: direction === 'next' ? clientWidth : -clientWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    updateCarouselState();
    const carousel = carouselRef.current;
    if (!carousel) return undefined;

    carousel.addEventListener('scroll', updateCarouselState, { passive: true });
    window.addEventListener('resize', updateCarouselState);

    return () => {
      carousel.removeEventListener('scroll', updateCarouselState);
      window.removeEventListener('resize', updateCarouselState);
    };
  }, []);

  return (  
    <div className="home-div">
      <div className="content">
        <div className="heading">
          <div className="projects-container">
            <div>
              <h1 className="projects-title">
                PROJECTS
              </h1>
              <p className="project-intro">
                A few things I have built, debugged, polished, and politely convinced to behave in production-like conditions.
              </p>
            </div>
            <div className="project-carousel-controls" aria-label="Project carousel controls">
              <button type="button" aria-label="Previous projects" onClick={() => scrollProjects('previous')} disabled={!carouselState.canScrollPrevious}>
                <FaChevronLeft aria-hidden="true" />
              </button>
              <span className="project-carousel-count">
                {carouselState.activePage + 1} / {carouselState.totalPages}
              </span>
              <button type="button" aria-label="Next projects" onClick={() => scrollProjects('next')} disabled={!carouselState.canScrollNext}>
                <FaChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="projects-carousel" ref={carouselRef}>
              {ProjectsData.map((val, ind) => {
                return (
                  <ProjectsCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    live={val.live}
                    source={val.source}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
