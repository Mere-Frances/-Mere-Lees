import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projectData from '/public/projectData.json';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        console.log(projectData);
        setProjects(projectData);
    }, []);

    return (
        <>            
            {projects.map((project, index) => (
                <Link 
                    key={index} 
                    to={`/project/${index}`} 
                    className={`project-item project-item--${index + 1}`}
                >
                    <h3>
                        {project.name}<br />{project.description}
                    </h3>
                </Link>
            ))}
        </>
    );
}

export default Projects;
