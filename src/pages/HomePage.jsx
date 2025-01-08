import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContentSection from '../components/ContentSection';
import TextScroll from '../components/TextScroll';
import projectData from '/public/projectData.json';
import GradientSection from '../components/BubbleBackground';
import Analytics from '../components/Analytics';

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      setProjects(projectData);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
    <GradientSection/>
      <TextScroll/>

      <section className='content-section pink-section'>
            <ContentSection 
            title='Take a look around' 
            includeSvg={true}
        />
        <div className='section-content--container extended-content--container'>
          <div className='quick-link--container' data-aos="fade-up">
            <Link to="/blog" className='quick-link--box main-link'>
              <img src='/images/quicklink-img-1.PNG' alt='outline doodle of characters'/>
              <h3>Blog</h3>
            </Link>

            <Link to="/graphics" className='quick-link--box main-link'>
              <img src='/images/quicklink-img-2.PNG' alt='outline doodle of characters'/>
              <h3>Graphics</h3>
            </Link>
            
            <Link to="/projects" className='quick-link--box main-link'>
              <img src='/images/quicklink-img-3.png' alt='outline doodle of characters'/>
              <h3>My Work</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className='content-section white-section'>
            <ContentSection 
            title='Latest Work' 
            includeSvg={true}
        />
        <div className='section-content--container minimised-container project-previews'>
          <p>Let the work speak for itself, have a look at my most recent projects</p>
          <div className='quick-link--container' data-aos="fade-up">
          {projects.slice(0, 3).map((project, index) => (
              <Link 
                key={index} 
                to={`/project/${index}`}  className='quick-link--box'>
                <img src={project.previewMockup} alt={project.name}/>
                <object><a>{project.name}</a></object>
                <p>{project.caption}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className='sticker'>
        <img src='/images/sticker.png'/>
      </div>

      <section>
        <Analytics/>
      </section>
    </>
  )
}

export default HomePage
