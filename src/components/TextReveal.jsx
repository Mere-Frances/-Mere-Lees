import React, { useEffect, useRef } from "react";

const TextReveal = ({ text }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={revealRef} className="text-reveal">
      {text.split("").map((char, index) => {
        if (char === " ") {
          // For spaces, return a non-breaking space wrapped in a span to keep it in the flow
          return <span key={index} className="text-rev--letter">&nbsp;</span>;
        }
        return (
          <span key={index} className="text-rev--letter" style={{ "--delay": `${index * 0.05}s` }}>
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default TextReveal;
