import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectsCard = ({ imgsrc, title, text, live, source, stack = [], codeAvailableOnRequest = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionLimit = 120;
  const shouldTruncate = text.length > descriptionLimit;

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength).trim()}...`;
    }
    return description;
  };

  return (
    <div className="project-card">
      {imgsrc ? (
        <video
          key={`${title}-${imgsrc}`}
          className="project-image"
          src={imgsrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={`${title} preview`}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="project-placeholder" aria-hidden="true">
          <span>{title.split(' ').map((word) => word[0]).join('').slice(0, 3)}</span>
        </div>
      )}

      <div className="project-card-body">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">
          {isExpanded ? text : truncateDescription(text, descriptionLimit)}
        </p>
        {shouldTruncate && (
          <button
            type="button"
            className="read-more-btn"
            onClick={() => setIsExpanded((prevIsExpanded) => !prevIsExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
        {stack.length > 0 && (
          <div className="project-stack">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
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
          {codeAvailableOnRequest && (
            <Link to="/contact" className="request-code-btn projects-btn">
              Code on request
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
