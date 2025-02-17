import React, { useState, useEffect } from "react";
// Make sure this file exists

const HomePage = () => {
  const images = [
    "../../public/images/3.jpg",
    "../../public/images/2.jpg",
    "../../public/images/3.jpg",
    "../../public/images/1.jpg"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homePage">
    <div className="home-container">
      {/* Background Image Layer */}
      <div
        className="background"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>

      {/* Overlay Text Layer */}
      <div className="overlay">
        <h1 className="home-title">Welcome to Our Electrical Shop</h1>
        <p className="home-subtitle">Providing Quality Electrical Solutions for Your Needs</p>
      </div>
    </div>
    </div>
  );
};

export default HomePage;


