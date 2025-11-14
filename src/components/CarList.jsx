import React, { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "./CarCard";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cars")
      .then((res) => {
        console.log("Connected:", res.data);
        setCars(res.data); // backend data
      })
      .catch((err) => console.log("Error:", err.message));
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cars.length === 0 ? (
        <p className="text-center text-gray-600 w-full col-span-full">
          Loading cars...
        </p>
      ) : (
        cars.map((car, index) => <CarCard key={index} car={car} />)
      )}
    </div>
  );
};

export default CarList;
