import React from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectsData from './ProjectsData';

const Projects = () => {
  return (  
    <div className="home-div">
      <div className="content">
        <div className="heading">
          <div className="projects-container">
            <h1 className="projects-title">
              PROJECTS
            </h1>
            <p className="project-intro">
              A few things I have built, debugged, polished, and politely convinced to behave in production-like conditions.
            </p>
          </div>
          <div className="projects-grid">
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
