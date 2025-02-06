import React, { createContext, useContext, useState, useEffect, useRef } from "react";

const AnimationContext = createContext(undefined);
export const AnimationProvider = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const isAnimatingRef = useRef(isAnimating);
  const toggleAnimation = () => {
    setIsAnimating((prev) => {
      const newState = !prev;
      isAnimatingRef.current = newState;
      return newState;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      toggleAnimation();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimationContext.Provider value={{ isAnimating, toggleAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};
