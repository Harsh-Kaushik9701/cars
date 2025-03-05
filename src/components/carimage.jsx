import React from "react";
import "./carimage.css";

const CarImage = ({ car }) => {
  return (
    <div className="car-image-container">
      <img src={car.image} alt={car.name} className="car-image" />
    </div>
  );
};

export default CarImage;
