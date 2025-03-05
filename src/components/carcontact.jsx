import React from "react";
import "./carcontact.css";

const CarCTA = () => {
  const phoneNumber = "+919988776655"; 

  return (
    <div className="car-cta-container">
      <a href={`tel:${phoneNumber}`} className="call-btn">
        Call Now
      </a>
    </div>
  );
};

export default CarCTA;
