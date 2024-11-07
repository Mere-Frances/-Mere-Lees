import React from 'react'
import Header from '../components/Header'
import MainLinks from '../components/MainLinks';
import Marquee from '../components/SkillsMarquee';
import ProjectPreview from '../components/ProjectPreview';

import projectData from '/public/projectData.json';

const HomePage = () => {
  return (
    <>
      <Header/>

      <div className="title-breaker--container">
        <span></span>
        <h2>My Knowledge</h2>
      </div>

      <Marquee/>

      <div className="title-breaker--container">
        <span></span>
        <h2>Explore</h2>
      </div>
      <MainLinks/>

      {/* <Skills/> */}

      {/* <div className="title-breaker--container">
        <span></span>
        <h2>Latest Projects</h2>
      </div>

      
      <div className="projects">
        <ProjectPreview/>
      </div> */}
    </>
  )
}

export default HomePage
