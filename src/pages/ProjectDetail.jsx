import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '/public/projectData.json';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectData[id];

    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <div className="project-detail--page">
            <div className="project-content-container">
                <div className="project-left-border">
                    <h4>0{project.id}</h4>
                    <span className="vertical-span vertical-span-one"></span>
                    <span className="vertical-span vertical-span-two"></span>
                </div>
                <div className="project-content-grid">
                    <h2 className="project-grid-item-1">{project.name} {project.description}</h2>
                    <p className="project-grid-item-2">{project.description}</p>
                    <div className="project-grid-item project-grid-item-3">
                        <img src={project.imageMed}/>
                    </div>
                    <div className="project-grid-item-4">
                        <img src={project.mockup}/>
                    </div>
                    <div className="project-grid-item project-grid-item-5">
                        <img src={project.imageLarge}/>
                    </div>
                    <div className="project-grid-item-6"></div>
                </div>
            </div>
            <div className="project-navigation-container">
                <div className="project-overlap-img"></div>
            </div>
            {/* Add more project details here, and customize as needed */}
        </div>
    );
}

export default ProjectDetail;
