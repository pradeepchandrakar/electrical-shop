import React from "react";
import Header from "./header"; 

const AboutUs = () => {
  return (
   
    <>
    <Header/>
    <div className="aboutPage">
      <div className="aboutHeader">
      <h1 className="aboutHading"><span className="aboutLogo">About </span>Us</h1>
      <p>We are locally owned and operated which makes our services causal as they <br></br>
      are done by friendly and helpful technicians.
      </p>
      </div>

      <div className="aboutContent">
        <div className="aboutImage">
          <img src="../../public/images/4.jpg" alt="" />
        </div>
        <div className="aboutText">
          <p>All of our services are backed by our 100% satisfaction guarantee. Our electricians can install anything from new security lighting for your outdoors to a whole home generator that will keep your appliances working during a power outage. Our installation services are always done promptly and safely.</p>
          <ul>
            <li> Full-service electrical layout, design</li>
            <li>Wiring and installation/upgrades</li>
            <li>Emergency power solutions (generators)</li>
            <li>Virtually any electrical needs you have – just ask!</li>
          </ul>
          <button>Know More</button>
          
        </div>
      </div>


 </div>

    </>
  );
};

export default AboutUs;

