import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import prototypeData from '/public/prototypeData.json';

const Prototypes = () => {
    const [prototypes, setPrototypes] = useState([]);

    useEffect(() => {
        console.log(prototypeData);
        setPrototypes(prototypeData);
    }, []);

    return (
        <>            
            {prototypes.map((prototype, index) => (
                <Link 
                    key={index} 
                    to={`/project/${index}`} 
                    className={`project-item project-item--${index + 1}`}
                    style={{ 
                        backgroundImage: `url(${prototype.coverImage})`, // Set the background image
                        backgroundSize: 'cover', // Ensure the image covers the entire item
                        backgroundPosition: 'center', // Center the image
                    }}
                >
                    <h3>
                        {prototype.name}<br />{prototype.description}
                    </h3>
                </Link>
            ))}
        </>
    );
}

export default Prototypes;
