import projectData from '/public/toolsIcons.json';
import React, { useEffect, useRef, useState } from 'react';

export const FloatingCircles = ({scrollToProjects}) => {
  const containerRef = useRef(null);
  const circlesRef = useRef([]);
  const [circlesData, setCirclesData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const items = projectData.slice(0, 10).map(item => ({
        id: item.id,
        imageLarge: item.icon
      }));
      setCirclesData(items);
    };

    fetchData();
  }, []);

  const getRandomVelocity = () => (Math.random() - 0.5) * 4;

  useEffect(() => {
    const container = containerRef.current;

    const calculateCircleSize = () => {
      const containerSize = Math.min(container.offsetWidth, container.offsetHeight);
      return Math.max(containerSize * 0.15, 50);
    };

    const circleSize = calculateCircleSize();

    const circleElements = circlesRef.current.map(circle => ({
      el: circle,
      x: Math.random() * (container.offsetWidth - circleSize),
      y: Math.random() * (container.offsetHeight - circleSize),
      velocityX: getRandomVelocity(),
      velocityY: getRandomVelocity(),
    }));

    const moveCircles = () => {
      circleElements.forEach(circle => {
        circle.x += circle.velocityX;
        circle.y += circle.velocityY;

        if (circle.x <= 0 || circle.x >= container.offsetWidth - circleSize) {
          circle.velocityX = -circle.velocityX;
        }
        if (circle.y <= 0 || circle.y >= container.offsetHeight - circleSize) {
          circle.velocityY = -circle.velocityY;
        }

        circle.el.style.left = circle.x + 'px';
        circle.el.style.top = circle.y + 'px';
      });
    };

    const interval = setInterval(moveCircles, 1000 / 60);

    return () => clearInterval(interval);
  }, [circlesData]);

  const additionalCircles = [...Array(5)].map((_, index) => ({
    id: `extra-${index}`,
    name: '',
    description: '',
    imageLarge: ''
  }));

  const allCirclesData = [...circlesData, ...additionalCircles];

  return (
    <div className="floating-container" ref={containerRef}>
      {allCirclesData.map((circle, index) => (
        <div
          key={circle.id}
          className="circle"
          ref={el => (circlesRef.current[index] = el)}
        >
          {circle.imageLarge ? (
            <>
              <div className="circle-icon">
                <img src={circle.imageLarge} alt={circle.name} />
              </div>
            </>
          ) : (
            <div className="circle2"></div>
          )}
        </div>
      ))}
      <ProjectHeader scrollToProjects={scrollToProjects}/>
    </div>
  );
};

const ProjectHeader = ({ scrollToProjects }) => {
  return (
    <div className="projects-header">
      <span className="hidden-message-title">Explore my </span>
      <div className="projects-title--header">
        <h2>
          <div className="text-wrapper">
            <span className="message-title">Explore my </span>
            <div className="header-message">
              <div className="word1">projects</div>
              <div className="word2">exercises</div>
              <div className="word3">designs</div>
            </div>
          </div>
        </h2>
      </div>
      <p>
        These works include educational exercises, assessments, collaborative
        projects, and of course, my own personal designs.
      </p>
      <div className="project-filter--links">
        <div className="main-button" onClick={scrollToProjects}>
          <a>Development</a>
        </div>
        <div className="main-button" onClick={scrollToProjects}>
          <a>Designs</a>
        </div>
        <div className="main-button" onClick={scrollToProjects}>
          <a>Exercises</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
