import React from "react";
import { Link } from "react-router-dom"; 
import "./CarList.css";

export const cars = [
    {
        id: 1,
        name: "2021 Maruti Suzuki Swift 1.5",
        price: "₹7.68 Lakh",
        kmDriven: "37K km",
        fuel: "Petrol",
        transmission: "Manual",
        makeYear: "Oct 2020",
        regYear: "Jan 2021",
        owner: "1st Owner",
        insurance: "Dec 2025",
        insuranceType: "Comprehensive",
        rto: "HR26",
        location: "Sector-29, Gurgaon",
        image: "https://picsum.photos/200/150?random=1",
      },
      {
        id: 2,
        name: "2020 Hyundai i20 Sportz",
        price: "₹6.50 Lakh",
        kmDriven: "25K km",
        fuel: "Diesel",
        transmission: "Automatic",
        makeYear: "Nov 2019",
        regYear: "Feb 2020",
        owner: "2nd Owner",
        insurance: "Oct 2024",
        insuranceType: "Third-Party",
        rto: "DL10",
        location: "Rohini, Delhi",
        image: "https://picsum.photos/200/150?random=2",
      },
      {
        id: 3,
        name: "2019 Honda City ZX CVT",
        price: "₹9.80 Lakh",
        kmDriven: "45K km",
        fuel: "Petrol",
        transmission: "Automatic",
        makeYear: "Dec 2018",
        regYear: "Jan 2019",
        owner: "1st Owner",
        insurance: "Jun 2025",
        insuranceType: "Comprehensive",
        rto: "UP32",
        location: "Lucknow, UP",
        image: "https://picsum.photos/200/150?random=3",
      },
      {
        id: 4,
        name: "2018 Tata Nexon XM",
        price: "₹7.20 Lakh",
        kmDriven: "60K km",
        fuel: "Diesel",
        transmission: "Manual",
        makeYear: "Jul 2017",
        regYear: "Apr 2018",
        owner: "3rd Owner",
        insurance: "Mar 2024",
        insuranceType: "Third-Party",
        rto: "KA05",
        location: "Bangalore, Karnataka",
        image: "https://picsum.photos/200/150?random=4",
      },
      {
        id: 5,
        name: "2022 Kia Seltos GTX+",
        price: "₹15.25 Lakh",
        kmDriven: "18K km",
        fuel: "Petrol",
        transmission: "Automatic",
        makeYear: "Sep 2021",
        regYear: "Feb 2022",
        owner: "1st Owner",
        insurance: "Dec 2026",
        insuranceType: "Comprehensive",
        rto: "MH01",
        location: "Mumbai, Maharashtra",
        image: "https://picsum.photos/200/150?random=5",
      },
      {
        id: 6,
        name: "2017 Ford EcoSport Titanium",
        price: "₹5.90 Lakh",
        kmDriven: "75K km",
        fuel: "Diesel",
        transmission: "Manual",
        makeYear: "Oct 2016",
        regYear: "Jan 2017",
        owner: "2nd Owner",
        insurance: "Aug 2025",
        insuranceType: "Comprehensive",
        rto: "TN09",
        location: "Chennai, Tamil Nadu",
        image: "https://picsum.photos/200/150?random=6",
      },
      {
        id: 7,
        name: "2023 Toyota Fortuner Legender",
        price: "₹45.80 Lakh",
        kmDriven: "12K km",
        fuel: "Diesel",
        transmission: "Automatic",
        makeYear: "Dec 2022",
        regYear: "Jan 2023",
        owner: "1st Owner",
        insurance: "Dec 2027",
        insuranceType: "Comprehensive",
        rto: "HR51",
        location: "Faridabad, Haryana",
        image: "https://picsum.photos/200/150?random=7",
      },
      {
        id: 8,
        name: "2016 Renault Kwid RXT",
        price: "₹3.20 Lakh",
        kmDriven: "50K km",
        fuel: "Petrol",
        transmission: "Manual",
        makeYear: "May 2015",
        regYear: "Mar 2016",
        owner: "3rd Owner",
        insurance: "Jul 2024",
        insuranceType: "Third-Party",
        rto: "WB20",
        location: "Kolkata, West Bengal",
        image: "https://picsum.photos/200/150?random=8",
      },
      {
        id: 9,
        name: "2015 Mahindra Scorpio S10",
        price: "₹6.80 Lakh",
        kmDriven: "90K km",
        fuel: "Diesel",
        transmission: "Manual",
        makeYear: "Aug 2014",
        regYear: "Jan 2015",
        owner: "2nd Owner",
        insurance: "Sep 2024",
        insuranceType: "Comprehensive",
        rto: "RJ14",
        location: "Jaipur, Rajasthan",
        image: "https://picsum.photos/200/150?random=9",
      }
  
];

const CarList = () => {
  // hook to get Cars List useCarsListQuery [react-query]
  return (
    <div className="car-list">
      <h2>Available Cars</h2>
      <div className="car-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <h3>{car.name}</h3>
            <p>{car.kmDriven} • {car.fuel} • {car.transmission}</p>
            <p className="car-price">{car.price}</p>
            <Link to={`/car/${car.id}`} className="details-button">View Details</Link> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
