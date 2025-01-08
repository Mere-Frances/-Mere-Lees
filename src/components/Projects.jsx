import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projectData from '/public/projectData.json';
import { MdOutlineArrowOutward } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { format } from 'date-fns'; 

const Projects = () => {
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

            <div className='populated-items'>
                {projects.map((project, index) => (
                    <Link 
                        key={index} 
                        to={`/project/${index}`} 
                        className={`project-item project-item--${index + 1}`}
                    >
                        <div className='image-wrapper'><img loading="lazy" src={project.previewImage} alt={project.name}/></div>
                        <div className='row'>
                            <h6>
                                {project.date 
                                    ? `${format(new Date(project.date), 'MMMM d, yyyy')}` 
                                    : 'Date unavailable'}
                            </h6>
                            <object><a href={project.url}>The real thing<MdOutlineArrowOutward /></a></object>
                        </div>
                        <p>{project.name}{project.description}</p>
                    </Link>
                ))}
            </div>  
        </>
    );
}

export default Projects;
