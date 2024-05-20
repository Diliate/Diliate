import React, { useState, useEffect } from 'react';
import easyImage from '../../assets/homeimages/easy.png'; // Import the image
import { motion } from 'framer-motion';
import './Preloader.css'; // Import your CSS file

const MyComponent = () => {
  const [text, setText] = useState('');
  const message = 'Amplify your reach';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + message[currentIndex]);
      currentIndex++;
      if (currentIndex === message.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust typing speed here (in milliseconds)

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <div id="preloader" className="preloader" style={{ backgroundColor: '#fff', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
   <motion.img
  src={easyImage}
  alt="Easy"
  initial={{ opacity: 10 }} // Start small and transparent
  transition={{ duration: 1 }} // Animation duration
  className="animated-image" // Add a class for styling the image animation
/>

  </div>
  );
};

export default MyComponent;
