import React from 'react';
import Projects from '../components/Projects';
import BackButton from '../components/BackButton';
import ProjectHeader from '../components/ProjectHeader';
import Calculator from '../components/Calculator';
import ColorPicker from '../components/ColorPicker';
import Clock from '../components/Clock';

const ProjectsPage = () => {
  return (
    <>
      <BackButton/>

      <div className="projects-header--container">
        <ProjectHeader/>
      </div>

      <div className="page-break--line">
          <span/>
      </div>

      <div className="title-breaker--container">
        <h2>Projects</h2>
      </div>

      <div className="projects-items--container">
      <Projects/>
      </div>

      <div className="page-break--line">
          <span/>
      </div>

      <div className="title-breaker--container">
      <h2>Exercises</h2>
      </div>
      
      <div className="projects-items--container">
        <Calculator/>
        <ColorPicker/>
        <Clock/>
      </div>

    </>
  )
}

export default ProjectsPage
