import React, { useState, useEffect, useRef } from 'react';

const cubicBezierEasing = (t) => {
  return t * (2 - t);
};

const Analytics = () => {
    const [visitors, setVisitors] = useState(0);
    const [pageViews, setPageViews] = useState(0);
    const [clicks, setClicks] = useState(0);
  
    const containerRef = useRef(null);
  
    const animateValue = (start, end, duration, setState) => {
      let startTimestamp = null;
  
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easedProgress = cubicBezierEasing(progress);
  
        setState(Math.floor(easedProgress * (end - start) + start));
  
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
  
      window.requestAnimationFrame(step);
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animateValue(0, 732, 3000, setVisitors);
            animateValue(0, 1174, 3500, setPageViews);
            animateValue(0, 11, 1000, setClicks);
          }
        },
        {
          threshold: 0.5,
        }
      );
  
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
  
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, []);
  
  return (
    <>
      <section className='content-section white-section stardew-project--container'>
        <div className='section-content--container'>
          <div className='text-overlay--title'>
            <h2>Live User Platform</h2>
            <h5>Live User Platform</h5>
          </div>
        </div>
        <section className='analytics-section' ref={containerRef}>
            <div className='analytics-image'>
                <img src='/public/images/stardew-mockup.png' alt="Background Image"/>
            </div>
            <div className='analytics-container'>
                <h3>Stardew Planner</h3>
                <p>Stardew Planner is an online guide and planner for the popular video game, Stardew Valley. The site is actively used by the game community and even provides a feedback form for users to submit ideas and feedback.</p>
                <p className='quote'>'I just love using the planner it is so useful, thanks a lot.' - Real user review</p>
                <div className='analytics-content'>
                    <div className='analytics'>
                        <h4>{clicks}</h4>
                        <p>Online</p>
                    </div>

                    <div className='analytics'>
                        <h4>{visitors}</h4>
                        <p>Visitors</p>
                    </div>

                    <div className='analytics'>
                        <h4>{pageViews}</h4>
                        <p>Page Views</p>
                    </div>
                </div>
            </div>
        </section>
      </section>
    </>
  );
};

export default Analytics;
