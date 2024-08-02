import React from 'react'
import Projects from '../components/Projects'
import BackButton from '../components/BackButton'

const ProjectsPage = () => {
  return (
    <>
      <BackButton/>

      <div className="page-break--line">
          <span/>
      </div>

      <div className="projects-header--container">
          <div className="project-title--container">
              <h2>Explore</h2>
          </div>
          <span className="vertical-span"></span>
          <div className="project-title--container">
              <h2>Websites</h2>
              <p>Education and freelance website projects, from prototypes to deployment.</p>
          </div>
          <span className="vertical-span"></span>
          <div className="project-title--container">
              <h2>Exercises</h2>
              <p>Tertiary development exercises, showcasing Javascript and other coding skills.</p>
          </div>
      </div>

      <div className="page-break--line">
          <span/>
      </div>

      <div className="projects-items--container">
      <Projects/>
      </div>

    </>
  )
}

export default ProjectsPage
