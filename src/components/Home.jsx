import React from 'react'
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { useRef, useEffect } from 'react';

const HomeImg = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "React Native Developer"],
      typeSpeed: 75,
      backSpeed: 35,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
    

  }, []);

  return (
    <div className="home-div">
        <div className="content">

        <div className="heading">
        <p className="hero-kicker">Full-stack web engineer building toward mobile</p>
        <h1 className="home-heading">Hello, I'm Leslie <span className="mobile-name">Gudo</span>,<br /> <span className="typed-role" ref={el} /></h1>
        <p className="home-para">I build practical, polished software across frontend and backend systems, with growing focus on React Native mobile apps. My toolkit includes React, Redux, JavaScript, Ruby on Rails, Node, PostgreSQL, Tailwind CSS, and WordPress, from custom template development in Local to polished builds using WordPress templates. I like clean code, useful interfaces, and bugs that leave quietly after one strongly worded console log.
        </p> 
        <div className="hero-highlight-grid">
          <span>1500+ hours hands-on</span>
          <span>10+ juniors mentored</span>
          <span>WordPress + React Native</span>
        </div>
        <div className="my-buttons-container">
            <Link to={"/projects"} className="home-buttons">Projects</Link>
            <Link to={"/contact"} className="home-buttons">Contact</Link>
            <Link to={"/about"} className="home-buttons">About Me</Link>
          </div>
        </div>
        </div>
    </div>
  )
}

export default HomeImg;
