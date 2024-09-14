import React from 'react'
import Projects from '../components/Projects'
import BackButton from '../components/BackButton'
import ProjectHeader from '../components/ProjectHeader'

const ProjectsPage = () => {
  return (
    <>
      <BackButton/>

      {/* <div className="page-break--line">
          <span/>
      </div> */}

      <div className="projects-header--container">
        <ProjectHeader/>
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
