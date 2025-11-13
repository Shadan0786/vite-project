// src/pages/BrowseCars.jsx
import React from "react";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars"; // 👈 Import your sample data

const BrowseCars = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Browse Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default BrowseCars;
