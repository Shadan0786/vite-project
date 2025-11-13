import React from "react";
import CarCard from "./CarCard";

const cars = [
  {
    name: "Honda Civic",
    brand: "Honda",
    type: "Sedan",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    features: ["Fuel Efficient", "Apple CarPlay"],
    available: false,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/2020_Honda_Civic_1.5_TC.jpg",
  },
  {
    name: "Toyota Camry",
    brand: "Toyota",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    features: ["Hybrid Engine", "Backup Camera"],
    available: true,
    image:
      "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/192443/camry-exterior-left-front-three-quarter-16.jpeg?isig=0&q=800",
  },
  {
    name: "Tesla Model 3",
    brand: "Tesla",
    type: "Electric",
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    features: ["Autopilot", "Premium Audio"],
    available: true,
    image:
      "https://www.motortrend.com/files/67b6576273572b0008fe325e/32-2025-tesla-model-3-front-view.jpg?*",
  },
];

const CarList = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;
