import React, { useState, useEffect } from "react";

const useHeader = () => {
  const [background, setBackground] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((current) => !current);
  };

  useEffect(() => {
    const handleBackground = () => {
      if (window.scrollY >= 1) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
    window.addEventListener("scroll", handleBackground);
  }, []);
  

  return { background, showMobileMenu, toggleMobileMenu };
};

export default useHeader;
