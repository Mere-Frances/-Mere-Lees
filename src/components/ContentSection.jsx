import React from 'react';

    const ContentSection = ({ title, img_url, customElement, paragraph, includeSvg }) => {
    return (
    <>
        <div className='content-section--wave'>
        {includeSvg && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 180">
                <path fillOpacity="1" d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,186.7C840,181,960,203,1080,208C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        )}
        </div>
        <div className='section-content--container'>
            <div className='text-overlay--title'>
                <h2>{title}</h2>
                <h5>{title}</h5>
            </div>
            <div className='content-details'>
                <div className="content-section--image">
                    {customElement ? (
                        customElement
                    ) : (
                        img_url && <img src={img_url} alt="Content Section" />
                    )}
                    <p>{paragraph}</p>
                </div>
                <p>{paragraph}</p>
            </div>
        </div>
    </>
  )
}

export default ContentSection
