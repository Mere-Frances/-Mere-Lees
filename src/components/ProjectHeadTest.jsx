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

const ProjectHeadTest = () => {
        const { id } = useParams();
        const navigate = useNavigate();
        const project = projectData[id];
    
        if (!project) {
            return <h2>Project not found</h2>;
        }
  return (
    <>
        <section className='project-head--cont'>
            <h1>{project.name}</h1>
            <p>{project.caption}</p>
            <div className='project-head--links'>
                <div className="main-button">
                    <a href={project.url} target='blank'>See the real thing</a>
                    <MdOutlineArrowOutward />
                </div>
                <span>•</span>
                <div className="main-button">
                    <a href={project.urlCase} target='blank'>Read the case study</a>
                    <MdOutlineArrowOutward />
                </div>
            </div>
            <div className="project-tags">
                {project.tags.map((tech, index) => (
                    <span key={index} className="project-tags-icons">
                        {tech}
                    </span>
                ))}
            </div>
            <div className='image-wrapper'><img src={project.previewImage} alt={project.name}/></div>
        </section>
    </>
  )
}

export default ProjectHeadTest
