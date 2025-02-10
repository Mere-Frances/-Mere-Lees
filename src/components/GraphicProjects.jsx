import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import graphicData from '/public/prototypeData.json';
import { MdOutlineArrowOutward } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { format } from 'date-fns'; 

const GraphicProjects = () => {
    const [graphics, setGraphics] = useState([]);

    useEffect(() => {
        setGraphics(graphicData);
    }, []);

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
    }, []);
    
  return (
    <>     
        <div className='populated-items extendo-pink'>
            {graphics.map((graphic, index) => (
                <Link 
                    key={index}  // Use unique project ID or another unique field
                    to={graphic.url}
                    className={`project-item project-item--${index + 1}`}  // Use ID in class name if needed
                >
                    <div className='image-wrapper'><img loading="lazy" src={graphic.previewImage} alt={graphic.name}/></div>
                    <div className='row'>
                        <h6>
                            {graphic.date 
                                ? `${format(new Date(graphic.date), 'MMMM d, yyyy')}` 
                                : 'Date unavailable'}
                        </h6>
                        <object><a href={graphic.url} target='blank'>The real thing<MdOutlineArrowOutward /></a></object>
                    </div>
                    <p>{graphic.name}{graphic.description}</p>
                </Link>
            ))}
        </div>  
    </>
  )
}

export default GraphicProjects
