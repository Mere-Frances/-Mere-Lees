import projectData from '/public/toolsIcons.json';
import React, { useEffect, useRef, useState } from 'react';

const FloatingCircles = () => {
  const containerRef = useRef(null);
  const circlesRef = useRef([]);
  const [circlesData, setCirclesData] = useState([]);

  useEffect(() => {
    // Fetch and process the JSON data
    const fetchData = () => {
      // Extract the first 10 items from the JSON data
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

    // Calculate circle size based on container size for responsiveness
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

  // Add 5 additional circles without images or text
  const additionalCircles = [...Array(5)].map((_, index) => ({
    id: `extra-${index}`,
    name: '',
    description: '',
    imageLarge: ''
  }));

  // Combine the circles data with additional circles
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
            <div className="circle2"></div> // Empty div for additional circles
          )}
        </div>
      ))}
      <ProjectHeader />
    </div>
  );
};

const ProjectHeader = () => {
  return (
    <div className='projects-header'>
    <span className="hidden-message-title">Explore my </span>
      <div className='projects-title--header'>
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
      <p>These works include educational exercises, assessments, collaborative projects and of course, my own personal designs.</p>
    </div>
  );
};

export default FloatingCircles;



// import React from 'react'

// const ProjectHeader = () => {
//   return (
//     <div className='projects-header'>
//       <div className='projects-title--header'>
//         <h2>
//             <span>Explore my favourite </span>
//             <div class="header-message">
//                 <div class="word1">projects</div>
//                 <div class="word2">exercises</div>
//                 <div class="word3">designs</div>
//             </div>
//         </h2>
//       </div>
//     </div>
//   )
// }

// export default ProjectHeader
