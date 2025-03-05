import React from "react";
import { useParams } from "react-router-dom";
import { cars } from "../pages/CarsList/CarList";
import "./CarOverview.css"; 

const CarOverview = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return <h2>Car Not Found</h2>;
  }

  return (
    <div>

    
    <div className="car-container">
      <img src={car.image} alt={car.name} className="car-image" />
      <h2>{car.name}</h2>

      <div className="overview-box">
        <h3>Car Overview</h3>
        <p className="note"><span className="star">*</span> <strong>Note:</strong> Make & registration years are different.</p>

        <div className="grid-container">
          <div className="grid-item"><p className="label">Make Year</p><p className="value">{car.makeYear}</p></div>
          <div className="grid-item"><p className="label">Reg. Year</p><p className="value">{car.regYear}</p></div>
          <div className="grid-item"><p className="label">Fuel Type</p><p className="value">{car.fuel}</p></div>
          <div className="grid-item"><p className="label">KM Driven</p><p className="value">{car.kmDriven}</p></div>
          <div className="grid-item"><p className="label">Transmission</p><p className="value">{car.transmission}</p></div>
          <div className="grid-item"><p className="label">Owner</p><p className="value">{car.owner}</p></div>
          <div className="grid-item"><p className="label">Insurance</p><p className="value">{car.insurance}</p></div>
          <div className="grid-item"><p className="label">Insurance Type</p><p className="value">{car.insuranceType}</p></div>
          <div className="grid-item"><p className="label">RTO</p><p className="value">{car.rto}</p></div>
          <div className="grid-item"><p className="label">Location</p><p className="value">{car.location}</p></div>
        </div>
      </div>

      <button className="call-button">📞 Call Now</button>
    </div>
    </div>
  );
};

export default CarOverview;
