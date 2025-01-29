import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '/public/projectData.json';
import BackButton from '../components/BackButton';
import { MdKeyboardDoubleArrowUp, MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

import ProjectHeadTest from '../components/ProjectHeadTest';

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

        // 🆕 Scroll-to-Top Button Logic
        const [showScroll, setShowScroll] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 300) {
                    setShowScroll(true);
                } else {
                    setShowScroll(false);
                }
            };
    
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

      useEffect(() => {
        AOS.refresh();
    }, [id]);

    return (
        <>
            <BackButton />
            <ProjectHeadTest/>

            <div className='project-case--cont'>
                {project.caseRef && (
                <div className='project-case-block video-block'>
                    <div className='case-text'>
                        <h3>{project.name}</h3>
                        <p>{project.caseIntro}</p>
                        <p>{project.caseRef}</p>
                    </div>
                    <video controls autoPlay muted loop preload="auto" data-aos="fade-up">
                        <source src={project.caseVid} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                )}
                <div className='project-case-block'>
                    <img src={project.caseBlock1} data-aos="fade-up"/>
                </div>
                <div className='project-case-block'>
                    <img src={project.caseBlock2} data-aos="fade-up"/>
                </div>
                <div className='project-case-block'>
                    <img src={project.caseBlock3} data-aos="fade-up"/>
                </div>
                <div className='project-case-block'>
                    <img src={project.caseBlock4}/>
                </div>
                <div className='project-case-block'>
                    <img src={project.caseBlock5} data-aos="fade-up"/>
                </div>
                <div className='project-case-block'>
                    <img src={project.caseBlock6} data-aos="fade-up"/>
                </div>
            </div>

            {showScroll && (
                <div className="main-button back-up" onClick={scrollToTop}>
                    <a href={project.urlCase} target='_blank' rel="noopener noreferrer">
                        Back to top
                    </a>
                    <MdKeyboardDoubleArrowUp className='up-arrow' />
                </div>
            )}

            <div className="project-navigation-container">
                <div className="page-nav-arrows">
                    <div className="secondary-button" onClick={handlePrevious}>
                    <MdOutlineArrowBack className='large-svg'/>
                        <h3>Prev</h3>
                    </div>
                    <div className="secondary-button" onClick={handleNext}>
                        <h3>Next</h3>
                        <MdOutlineArrowForward className='large-svg'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectDetail;
