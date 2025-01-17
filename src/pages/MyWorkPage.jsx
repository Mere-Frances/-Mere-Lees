import React, { useState, useEffect } from 'react';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import ContentSection from '../components/ContentSection';
import TextReveal from '../components/TextReveal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyWork = () => {
  // State to hold the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Set up effect hook to listen for window resize
  useEffect(() => {
    // Update windowWidth on resize
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Attach resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine the image path based on window width
  const imagePath = windowWidth <= 440
    ? '/images/mobile-pattern-background.png' // For mobile (width <= 440px)
    : '/images/pattern-background.png'; // Default image for larger devices

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="parallax-container">
        <section className="para-sec para-sec-1">
          <h1>My Work</h1>
          <div className="text-rev--cont para-sec-text-rev small-rev--let">
            <TextReveal text="Projects & Case Studies" />
          </div>
          <p>
            Discover how my projects embrace the balance between freedom and
            precision. After all, creativity is a wild mind and a disciplined eye.
          </p>
          <div className="para-sec--head">
            {/* Dynamically set the image source */}
            <img src={imagePath} alt="Background pattern" />
          </div>
        </section>
        <section className="para-sec para-sec-2">
          <section className="content-section extended-title special-section">
            <ContentSection title="Website Design" includeSvg={true} />
            <Projects />
            <Footer />
          </section>
        </section>
      </div>
    </>
  );
};

export default MyWork;
