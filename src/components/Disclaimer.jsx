import React, { useState, useEffect } from 'react';

const AcademicDisclaimer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const disclaimerAcknowledged = localStorage.getItem('disclaimerAcknowledged');
    if (!disclaimerAcknowledged) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        document.body.style.overflow = 'hidden';
      }, 2000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('disclaimerAcknowledged', 'true');
    setIsVisible(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {isVisible && (
        <div className="disclaimer-overlay">
          <div className="disclaimer-popup">
            <h3>Academic Disclaimer</h3>
            <p>
              The projects showcased on this portfolio are created purely for educational and demonstrative purposes.
              They represent fictional scenarios and are not intended for commercial use.
            </p>
            <div className="main-button">
              <a onClick={handleClose} aria-label="Dismiss Disclaimer">
                Okey Dokey
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AcademicDisclaimer;
