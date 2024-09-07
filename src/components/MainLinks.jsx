import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLinks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration (optional)
      once: true,     // Whether animation should happen only once (optional)
    });
  }, []); // Empty dependency array to run once on mount

  return (
    <div data-aos="fade-up" className="main-links--container">
    <Link to="/graphics" className="main-link--box graphic-designs">
      <h3>Graphic Designs</h3>
    </Link>
    <Link to="/projects" className="main-link--box web-designs">
      <h3>Web Designs</h3>
    </Link>
    <Link to="/blog" className="main-link--box blog">
      <h3>Blog</h3>
    </Link>
  </div>
  );
};

export default MainLinks;
