import React, { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "./CarCard";

const CarList = ({ user, onRentClick }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.log("Error:", err.message));
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cars.length === 0 ? (
        <p className="text-center text-gray-600 w-full col-span-full">
          Loading cars...
        </p>
      ) : (
        cars.map((car) => (
          <CarCard
            key={car._id}
            car={car}
            user={user}
            onRentClick={onRentClick}
          />
        ))
      )}
    </div>
  );
};

export default CarList;
