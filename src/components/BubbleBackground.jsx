// src/components/GradientSection.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const GradientSection = () => {
  const interactiveRef = useRef(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 10;
      curY += (tgY - curY) / 10;

      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }

      requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="gradient-section">

        <div className="header-text--container">
                <div className="title">
                    <span>Haere mai Welcome.</span>
                    <span className='sub-head'>My name is Meredith, and I'm a UI/UX
                        <a>Designer & Developer</a>   
                    </span>
                </div>
            {/* <p>My name is Meredith, and I am a creative UI/UX designer and web developer.
                I was born and raised here in Aotearoa and spent two years of my life pursuing my design career in Te
                Whanganui a Tara, Wellington.</p> */}
            <div className="header-links--container">
                <div className="main-button header-links">
                    <Link to="/blog">Blog</Link>
                </div>
                <div className="main-button header-links">
                    <Link to="/graphics">Graphics</Link>
                </div>
                <div className="main-button header-links">
                    <Link to="/projects">My Work</Link>
                </div>
            </div>
        </div>

      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive" ref={interactiveRef}></div>
        </div>
      </div>
    </section>
  );
};

export default GradientSection;
