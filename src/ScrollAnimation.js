import React, { useEffect, useRef, useState } from "react";
import "./App.css"; // Ensure to include the styles

const ScrollAnimation = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null); // Ref for the element to observe

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the element is in view
          observer.unobserve(entry.target); // Unobserve once it's in view to avoid re-triggering
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={`animate ${isVisible ? "visible" : ""} overflow-hidden`} style={{zIndex:-2}}>
        {children}
    </div>
  );
};

export default ScrollAnimation;
