// src/components/CarCard.jsx
import React, { useState } from "react";

const CarCard = ({ car }) => {
  const [showModal, setShowModal] = useState(false);

  const handleRent = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    alert(`You have rented ${car.name}!`);
    setShowModal(false);
  };

  return (
    <>
      {/* Card */}
      <div className="relative bg-white shadow-md rounded-xl overflow-hidden transition transform hover:scale-105 hover:shadow-lg duration-300">
        {/* Image Section */}
        <div className="relative w-full h-52">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />

          {/* Availability overlay */}
          {!car.available && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <p className="text-white font-semibold text-lg">Not Available</p>
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{car.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{car.brand}</p>

          <div className="flex flex-wrap gap-2 text-xs text-gray-600">
            <p>🚗 {car.type}</p>
            <p>🪑 {car.seats} Seats</p>
            <p>⚙️ {car.transmission}</p>
            <p>⛽ {car.fuel}</p>
          </div>

          <div className="mt-3 text-xs text-gray-500">
            {car.features?.map((feature, index) => (
              <p key={index}>✔ {feature}</p>
            ))}
          </div>

          {/* Rent Now Button */}
          <div className="mt-4">
            <button
              onClick={handleRent}
              disabled={!car.available}
              className={`w-full py-2 rounded-lg text-white font-semibold transition duration-300 ${
                car.available
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {car.available ? "Rent Now" : "Unavailable"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Rent {car.name}</h2>
            <p className="text-sm text-gray-500 mb-2">Brand: {car.brand}</p>
            <p className="text-sm text-gray-500 mb-4">
              Transmission: {car.transmission} | Fuel: {car.fuel}
            </p>

            {/* Booking Form */}
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Pickup Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md px-2 py-1 mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Return Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md px-2 py-1 mt-1"
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="flex justify-end mt-5 gap-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-300 rounded-md text-gray-800 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Confirm Rent
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarCard;
