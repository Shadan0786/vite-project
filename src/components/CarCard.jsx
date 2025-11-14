import React from "react";
import { Users, Gauge, Fuel } from "lucide-react";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition relative flex flex-col">

      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className={`w-full h-48 object-cover ${!car.available ? "opacity-60" : ""
            }`}
        />

        {!car.available && (
          <span className="absolute top-4 left-4 bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
            Not Available
          </span>
        )}
      </div>


      <div className="p-4 flex-1 flex flex-col justify-between">

        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-gray-900 text-lg">
              {car.name}
            </h3>
            <span className="text-xs font-medium bg-gray-900 text-white px-2 py-1 rounded-full">
              {car.type}
            </span>
          </div>


          <p className="text-gray-500 text-sm mb-3">{car.brand}</p>


          <div className="flex items-center justify-between gap-4 text-gray-600 text-sm mb-3">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" /> {car.seats}
            </div>
            <div className="flex items-center gap-1">
              <Gauge className="w-4 h-4" /> {car.transmission}
            </div>
            <div className="flex items-center gap-1">
              <Fuel className="w-4 h-4" /> {car.fuel}
            </div>
          </div>


          <ul className="text-sm text-gray-600 space-y-1 mb-4">
            {Array.isArray(car.features) &&
              car.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {feature}
                </li>
              ))}
          </ul>



          <div className="flex justify-end">
            <button
              disabled={!car.available}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition ${car.available
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Rent Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CarCard;
