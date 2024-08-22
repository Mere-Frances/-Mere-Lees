import React from 'react'
// import skillsData from '/public/skillsData.json'

const Skills = () => {
  const skillData = [
    {
      title: "React",
      backgroundImage: "url(/images/skills-icons/folder-page-react.png)"
    },
    {
      title: "HTML",
      backgroundImage: "url(./images/skills-icons/folder-page-html.png)"
    },
    {
      title: "CSS",
      backgroundImage: "url(./images/skills-icons/folder-page-css.png)"
    },
    {
      title: "Javascript",
      backgroundImage: "url(./images/skills-icons/folder-page-js.png)"
    },
    {
      title: "Figma",
      backgroundImage: "url(./images/skills-icons/folder-page-figma.png)"
    },
    {
      title: "SCSS/SASS",
      backgroundImage: "url(./images/skills-icons/folder-page-sass.png)"
    },
    {
      title: "VS Code",
      backgroundImage: "url(./images/skills-icons/folder-page-vs.png)"
    },
    {
      title: "Wordpress",
      backgroundImage: "url(./images/skills-icons/folder-page-wordpress.png)"
    },
    {
      title: "API's",
      backgroundImage: "url(./images/skills-icons/folder-page-api.png)"
    },
    {
      title: "Adobe Suite",
      backgroundImage: "url(./images/skills-icons/folder-page-adobe.png)"
    }
  ];
  return (
    <>
        <div className="skills-container">
          {skillData.map((skill, index) => (
            <div className="skill-file" key={index}>
                <div className="skill-file-container">
                    <div className="folder-back"></div>
                    <div className="folder-front"></div>
                    <div className="skill-file-icon"
                    style={{ backgroundImage: skill.backgroundImage }}>
                    </div>
                </div>
                <p>{skill.title}</p>
            </div>
          ))}
        </div>
    </>
  )
}

export default Skills

