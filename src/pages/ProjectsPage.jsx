import React, { useEffect } from 'react';
import Projects from '../components/Projects';
import Calculator from '../components/Calculator';
import ColorPicker from '../components/ColorPicker';
import ContentSection from '../components/ContentSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <header className="projects-header">
        <div className="header-border--block text-block" data-aos="fade-up">
          <p className='header-surtitle'>My projects</p>
          <h2>"Everything you can imagine is <span>real</span>"</h2>
          <p>Discover how my projects embrace the balance between freedom and precision, after all, creativity is a wild mind and a disciplined eye.</p>
        </div>
      </header>

      <section className='content-section white-section extended-title'>
        <ContentSection
            title='Website Design'
            includeSvg={false}
        />
        <Projects/>
      </section>    

      <section className='content-section pink-section extended-title'>
        <ContentSection
            title='Practical Exercises'
            includeSvg={true}
        />
        <div className='section-content--container extended-content--container practical-examples'>
          <Calculator />
          <ColorPicker />
        </div>
      </section>    
    </>
  );
};

export default ProjectsPage;
