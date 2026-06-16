import React, { useState } from 'react';

const ProjectsCard = ({ imgsrc, title, text, live, source }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)} ...`;
    }
    return description;
  };

  return (
    <div
      className={`project-card ${isActive ? 'active' : ''} ${isActive ? 'slide-in' : ''}`}
      onClick={handleClick}
    >
                  <video className="project-image" autoPlay loop muted>
                <source src={imgsrc} type="video/mp4" />
                  Your browser does not support the video tag.
            </video>

      <h2 className="project-title">{title}</h2>
      <div>
      <p className="project-description">
          {truncateDescription(text, 100)}
        </p>
        <div className="project-btns">
          {live && (
            <a href={live} className="live-btn projects-btn" target="_blank" rel="noopener noreferrer">
              Live
            </a>
          )}
          {source && (
            <a href={source} className="source-btn projects-btn" target="_blank" rel="noopener noreferrer">
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
