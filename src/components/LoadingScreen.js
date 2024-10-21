import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import PossiblePic from "./images/possible_logo.png";

const LoadingScreen = ({ setLoadingFinished }) => {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false); // Start fading out after 3 seconds
        setTimeout(() => setLoadingFinished(true), 1500); // Wait 1.5 seconds for the fade-out transition
      }, 3000); // Display loading screen for 3 seconds
  
      return () => clearTimeout(timer); // Cleanup the timer
    }, [setLoadingFinished]);
  
    return (
      <div className={`loading-screen ${!isVisible ? 'hidden' : ''}`}>
        <img src={PossiblePic} alt="Logo" className="logo" />
      </div>
    );
  };
  
  export default LoadingScreen;