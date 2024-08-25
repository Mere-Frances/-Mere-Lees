import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '/public/projectData.json';
import BackButton from '../components/BackButton';
import prevArrow from '/public/images/prev.svg';
import nextArrow from '/public/images/next.svg';
import { MdOutlineArrowOutward } from "react-icons/md";

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

    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <div className="project-detail--page">
            <BackButton/>
            <div className="project-content-container">
                <div className="project-left-border">
                    <h4>0{project.id}</h4>
                    <span className="vertical-span vertical-span-one"></span>
                    <span className="vertical-span vertical-span-two"></span>
                </div>

                {/* title, text and mockup */}
                <div className="large-project-left-side-content">
                    {/* hidden mockup image */}
                    <div className="small-project-mockup">
                        <img src={project.mockup}/>
                    </div>
                    {/* titles */}
                    <h2 className="hidden-project-text-details">{project.name} {project.description}</h2>
                    <p className="hidden-project-text-details">{project.biographyMajor}<br/><br/></p>
                    <p className="hidden-project-text-details">{project.biographyMinor}</p>
                    <div className="hidden-project-tags">
                        {project.tags.map((tech, index) => (
                            <span key={index} className="project-tag-icons">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="hidden-project-text-details viewing-button">
                            <div className="main-button">
                                <a href={project.url}>See the real thing</a>
                                <MdOutlineArrowOutward />
                            </div>
                        </div>
                    
                    <div className="large-project-text">
                        <h2>{project.name} {project.description}</h2>
                        <p>{project.biographyMajor}<br/></p>
                        <p>{project.biographyMinor}</p>
                        <div className="project-tags">
                            {project.tags.map((tech, index) => (
                                <span key={index} className="project-tags-icons">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="viewing-button">
                            <div className="main-button">
                                <a href={project.url}>See the real thing</a>
                                <MdOutlineArrowOutward />
                            </div>
                        </div>
                    </div>
                    {/* med image */}
                    <div className="large-project-med-image">
                        <img src={project.imageMed}/>
                    </div>
                </div>

                {/*  */}
                <div className="large-project-right-side-content">
                    {/* mockup */}
                    <div className="large-project-mockup">
                        <img src={project.mockup}/>
                    </div>

                    {/* large image */}
                    <div className="large-project-large">
                        <img src={project.imageLarge}/>
                    </div>
                    <div className="project-grid-item-5"></div>
                </div>
            </div>

            <div className="hidden-small-project-images">
                <div className="small-project-med-image">
                    <img src={project.imageMed}/>
                </div>
                <div className="small-project-large-image">
                    <img src={project.imageLarge}/>
                </div>
            </div>

            <div className="project-navigation-container">
                <div className="page-nav-arrows">
                    <div className="previous-arrow" onClick={handlePrevious}>
                        <img src={prevArrow} alt="Previous Arrow" className="arrow-icon previous-arrow-icon" />                    </div>
                    <div className="next-arrow" onClick={handleNext}>
                        <img src={nextArrow} alt="Next Arrow" className="arrow-icon next-arrow-icon" />
                    </div>
                </div>
                <div className="project-overlap-img">
                    <img src={project.imageSmall}/>
                </div>
            </div>
            {/* Add more project details here, and customize as needed */}
        </div>
    );
}

export default ProjectDetail;
