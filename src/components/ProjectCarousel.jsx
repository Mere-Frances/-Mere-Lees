import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import projectData from '/public/projectData.json';

const ProjectCarousel = () => {
    const { id } = useParams();
    const project = projectData[id];

  const imageTextPairs = [
    { image: project.mockup1, title: "The Brief", content: project.biographyBrief },
    { image: project.mockup2, title: "The Tools", content: project.biographyTools },
    { image: project.mockup3, title: "The Outcome", content: project.biographyOutcome },
    { image: project.mockup4, title: "The Reflection", content: project.biographyReflection },
  ];

  const [primaryIndex, setPrimaryIndex] = useState(0);

  const handleImageClick = (index) => {
    setPrimaryIndex(index);
  };
  return (
    <section className='project-carousel--container'>
      <div className='carousel-image--section'>
        <div className='carousel-primary--img'>
            <img src={imageTextPairs[primaryIndex].image} alt="Primary" />
        </div>
      </div>
      <div className='carousel-details--section'>
        <div className={`carousel-details project-${imageTextPairs[primaryIndex].title.toLowerCase().replace(" ", "-")}`}>
          <h3>{imageTextPairs[primaryIndex].title}</h3>
          <p>{imageTextPairs[primaryIndex].content}</p>
        </div>
        <div className='carousel-secondary--img'>
          {imageTextPairs.map((pair, index) => (
            index !== primaryIndex && (
              <img
                key={index}
                src={pair.image}
                alt="Secondary"
                onClick={() => handleImageClick(index)}
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
