import React, { useEffect, useState } from 'react';
import projectData from '/public/projectData.json'

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Simulate fetching data from JSON file
        console.log(projectData);
        setProjects(projectData);
    }, []);

    return (
        <>            
        {projects.map((project, index) => (
                <a key={index} href={project.url} className={`project-item project-item--${index + 1}`}>
                    <h3>
                        {project.name}<br />{project.description}
                    </h3>
                </a>
            ))}
        </>
    );
}

export default Projects
