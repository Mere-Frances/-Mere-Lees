import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectData from '/public/projectData.json';
import { MdOutlineArrowOutward } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectHeadTest = () => {
    const { id } = useParams();
    const project = projectData[id];

    if (!project) {
        return <h2>Project not found</h2>;
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <section className='project-head--cont'>
                <h1>{project.name}</h1>
                <p>{project.caption}</p>
                <div className='project-head--links'>
                    {project.url && (
                        <>
                            <a href={project.url} target='_blank' rel="noopener noreferrer" className="secondary-button">
                                    See the real thing
                                <MdOutlineArrowOutward />
                            </a>
                        </>
                    )}
                    {project.urlCase && (
                        <>
                            <span>•</span>
                            <a href={project.urlCase} target='_blank' rel="noopener noreferrer" className="secondary-button">
                                    Bēhance Case Study
                                <MdOutlineArrowOutward />
                            </a>
                        </>
                    )}
                </div>
                <div className="project-tags">
                    {project.tags.map((tech, index) => (
                        <span key={index} className="project-tags-icons">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className='image-wrapper'>
                    <img src={project.previewImage} alt={project.name} />
                </div>
            </section>
        </>
    );
}

export default ProjectHeadTest;
