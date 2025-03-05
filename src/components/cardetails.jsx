import React from "react";
import { useParams } from "react-router-dom";
import { cars } from "../pages/CarsList/CarList"; 

const CarDetails = () => {
  const { id } = useParams();
  console.log("Received ID:", id); 
  console.log("Cars List:", cars); 
  const car = cars.find((car) => car.id === parseInt(id));
  console.log("Found Car:", car); 

  if (!car) {
    return <h2>Car Not Found</h2>;
  }

  return (
    <div className="car-details">
      <img src={car.image} alt={car.name} className="car-image" />
      <h2>{car.name}</h2>
      <p>{car.kmDriven} • {car.fuel} • {car.transmission}</p>
      <p className="car-price">{car.price}</p>
    </div>
  );
};

export default CarDetails;
