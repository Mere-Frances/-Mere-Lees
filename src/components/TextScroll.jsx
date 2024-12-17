import React from 'react';

const TextScroll = () => {
  const texts = [
    "Wireframing",
    "Prototyping",
    "Journey Maps",
    "Responesive Design",
    "User Testing",
    "Use Cases",
    "IA",
    "Adobe Suite",
    "Figma",
    "Frontend",
    "Wordpress",
    "React",
    "API's",
    "Fullstack",
    "JQuery",
    "SCSS/SASS",
    "Javascript",
    "Collaboration",
    "HTML",
    "MongoDB",
    "SEO",
    "Database",
  ];

  return (
    <div className='text-scroll-container'>
      <div className='text-scroll'>
        {texts.concat(texts).map((text, index) => (
          <span key={index} className='text'>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextScroll;
