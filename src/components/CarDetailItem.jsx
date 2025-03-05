
import React from "react";
import "./CarDetailItem.css"; // Styling ke liye

const CarDetailItem = ({ label, value }) => {
  return (
    <div className="car-item">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
};

export default CarDetailItem;
