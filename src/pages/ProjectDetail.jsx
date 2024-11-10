import React from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '/public/projectData.json';
import BackButton from '../components/BackButton';
import prevArrow from '/public/images/prev.svg';
import nextArrow from '/public/images/next.svg';
import { MdOutlineArrowOutward } from "react-icons/md";

import ProjectCarousel from '../components/ProjectCarousel';

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

    return (
        <>
            <BackButton />
            <div className="project-detail--page">
                    <div className='project-detail--header'>
                        <div className='title-content'>
                            <h1>{project.name} {project.description}</h1>
                            <div className="project-tags">
                                {project.tags.map((tech, index) => (
                                    <span key={index} className="project-tags-icons">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p>{project.caption}</p>
                            <div className="main-button">
                                <a href={project.url}>See the real thing</a>
                                <MdOutlineArrowOutward />
                            </div>
                            <div className="project-navigation-container">
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
                        <div className='project-mockup'>
                            <img src={project.mockup} alt="Mockup" />
                        </div>
                    </div>

                    <div className="title-breaker--container title-breaker--container-outlier">
                        <span></span>
                        <h2>Overview</h2>
                    </div>

                    <p>{project.biographyMajor}</p>
                    <p>{project.biographyMinor}</p>

                    <ProjectCarousel/>

                    <div className="title-breaker--container">
                        <span></span>
                        <h2>Style Tile</h2>
                    </div>

                    <section className='project-styletile--container'>
                        <div className='project-styletile'>
                            <div className='tile thumbnail'>
                                <img src={project.thumbnail} alt="Mockup" />
                            </div>
                            <div className='tile palette'>
                                <div className='palette-color' style={{ backgroundColor: project.color1 }}></div>
                                <div className='palette-color' style={{ backgroundColor: project.color2 }}></div>
                                <div className='palette-color' style={{ backgroundColor: project.color3 }}></div>
                                <div className='palette-color' style={{ backgroundColor: project.color4 }}></div>
                                <div className='palette-color' style={{ backgroundColor: project.color5 }}></div>
                            </div>
                            <div className='tile logo'>
                                <img src={project.logo} alt="Mockup" />
                            </div>
                            <div className='tile headerset'>
                                <img src={project.headerset} alt="Headerset" />
                            </div>
                            <div className='tile asset'>
                                <img src={project.asset} alt="Asset design" />
                            </div>
                            <div className='tile cover'>
                                <img src={project.coverImage} alt="Mockup" />
                            </div>
                        </div>
                    </section>
            </div>
        </>
    );
}

export default ProjectDetail;
