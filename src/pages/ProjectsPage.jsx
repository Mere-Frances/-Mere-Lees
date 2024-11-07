import React, { useRef } from 'react';
import Projects from '../components/Projects';
import Prototypes from '../components/Prototypes';
import BackButton from '../components/BackButton';
import { FloatingCircles } from '../components/ProjectHeader';
import Calculator from '../components/Calculator';
import ColorPicker from '../components/ColorPicker';
import Clock from '../components/Clock';

const ProjectsPage = () => {
  // Creating a reference for the container of the Projects component
  const projectsContainerRef = useRef(null);

  // Scroll function using `scrollIntoView`
  const scrollToProjects = () => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <BackButton />

      <div className="projects-header--container">
        <FloatingCircles scrollToProjects={scrollToProjects}/>
      </div>

      <div className="page-break--line">
        <span />
      </div>

      <div className="title-breaker--container">
        <span></span>
        <h2>Web Development Projects</h2>
      </div>

      {/* website projects */}
      <div className="projects-items--container" ref={projectsContainerRef}>
        <Projects />
      </div>

      <div className="title-breaker--container">
        <span></span>
        <h2>Design Prototypes & Visuals</h2>
      </div>

      <div className="projects-items--container">
        <Prototypes />
      </div>

      <div className="title-breaker--container">
        <span></span>
        <h2>Exercises & Mini Projects</h2>
      </div>
      
      <div className="projects-items--container">
        <Calculator />
        <ColorPicker />
        <Clock />
      </div>
    </>
  );
};

export default ProjectsPage;
