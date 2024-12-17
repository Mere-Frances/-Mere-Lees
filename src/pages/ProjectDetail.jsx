import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '/public/projectData.json';
import BackButton from '../components/BackButton';
import prevArrow from '/public/images/prev.svg';
import nextArrow from '/public/images/next.svg';
import { MdOutlineArrowOutward } from "react-icons/md";
import ContentSection from '../components/ContentSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectData[id];

    if (!project) {
        return <h2>Project not found</h2>;
    }

    const handleNext = () => {
        const nextId = (parseInt(id) + 1) % projectData.length;
        navigate(`/project/${nextId}`);
    };

    const handlePrevious = () => {
        const prevId = (parseInt(id) - 1 + projectData.length) % projectData.length;
        navigate(`/project/${prevId}`);
    };

    const filters = {
        brief: (
            <>
                <p>{project.biographyBrief}</p>
            </>
        ),
        tools: (
            <>
                 <p>{project.biographyTools}</p>
            </>
        ),
        outcome: (
            <>
                <p>{project.biographyOutcome}</p>            
            </>
        ),
        reflection: (
            <>
                <p>{project.biographyReflection}</p>            
            </>
        ),
    };

    const [activeFilter, setActiveFilter] = useState(Object.keys(filters)[0]);

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

    return (
        <>
            <BackButton />
            <section className='single-page--header--container'>
                <div className='single-page--header'>
                    <h1>{project.name}</h1>
                    <p>{project.caption}</p>
                    <div className="main-button">
                        <a href={project.url}>See the real thing</a>
                        <MdOutlineArrowOutward />
                    </div>
                    <div className="project-tags">
                        {project.tags.map((tech, index) => (
                            <span key={index} className="project-tags-icons">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="project-navigation-container visible">
                        <div className="page-nav-arrows">
                            <div className="previous-arrow" onClick={handlePrevious}>
                                <img src={prevArrow} alt="Previous Arrow" className="arrow-icon previous-arrow-icon" />
                            </div>
                            <div className="next-arrow" onClick={handleNext}>
                                <img src={nextArrow} alt="Next Arrow" className="arrow-icon next-arrow-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image-wrapper'><img src={project.previewImage} alt={project.name}/></div>
            </section>

            <section className='content-section pink-section'>
                <ContentSection
                    title='Under the hood'
                    includeSvg={true}
                />
                <div className='section-content--container single-page--about--container'>
                    <div className="product-filters" data-aos="fade-up">
                        {Object.keys(filters).map((filterKey) => (
                            <a
                                key={filterKey}
                                onClick={() => setActiveFilter(filterKey)}
                                className={`main-button filter-link ${activeFilter === filterKey ? "active" : ""}`}
                            >
                                {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
                            </a>
                        ))}
                    </div>

                    <div className="product-dynamic-content" data-aos="fade-up">
                        {filters[activeFilter]}
                    </div>
                </div>
            </section>

            <section className='content-section white-section'>
                <ContentSection
                    title='Mockups & more'
                    includeSvg={true}
                />
                <div className='single-page--gallery' data-aos="fade-up">
                    <img src={project.mockup1} alt={project.name}/>
                    <img src={project.screenshot1} alt={project.name}/>
                    <img src={project.mockup2} alt={project.name}/>
                    <img src={project.screenshot2} alt={project.name}/>
                    <img src={project.mockup3} alt={project.name}/>
                    <img src={project.mockup4} alt={project.name}/>
                </div>
            </section>

            {/* <section className='content-section pink-section'>
                <ContentSection
                    title='Behind the scenes'
                    includeSvg={true}
                />
                <div className='single-page--details'>
                    <div class="card" data-aos="fade-up">
                        <div class="card__content">
                            <h3>Research</h3>
                            <p>{project.research}</p> 
                        </div>
                        <img  src={project.researchImage} alt={project.name}/>
                    </div>
                    <div class="card" data-aos="fade-up">
                        <div class="card__content">
                            <h3>Wireframes</h3>
                            <p>{project.wireframes}</p>                        
                        </div>
                        <img  src={project.wireframeImage} alt={project.name}/>
                    </div>
                    <div class="card" data-aos="fade-up">
                        <div class="card__content">
                            <h3>User Testing</h3>
                            <p>{project.userTesting}</p>
                        </div>
                        <img  src={project.testingImage} alt={project.name}/>
                    </div>
                </div>
            </section> */}

            <div className="project-navigation-container hidden">
                <div className="page-nav-arrows">
                    <div className="previous-arrow" onClick={handlePrevious}>
                        <img src={prevArrow} alt="Previous Arrow" className="arrow-icon previous-arrow-icon" />
                    </div>
                    <div className="next-arrow" onClick={handleNext}>
                        <img src={nextArrow} alt="Next Arrow" className="arrow-icon next-arrow-icon" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectDetail;
