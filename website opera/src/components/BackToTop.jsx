import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [progress, setProgress] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setProgress(Math.min(scrolled, 100));
      setShowBtn(scrollTop > 200); // Show after 200px scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For SVG circle dash offset animation
  const circumference = 2 * Math.PI * 40;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <button
      className={`back-to-top ${showBtn ? "active" : ""}`}
      aria-label="Back to Top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="progress-circle">
        <svg viewBox="0 0 100 100">
          <circle className="bg" cx="50" cy="50" r="40"></circle>

          <circle
            className="progress"
            cx="50"
            cy="50"
            r="40"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: dashOffset,
            }}
          ></circle>
        </svg>

        <span className="progress-percentage">{Math.round(progress)}%</span>
      </span>
    </button>
  );
};

export default BackToTop;
