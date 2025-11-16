import React, { useEffect, useState } from "react";

const MyRentals = () => {
  const [rentals, setRentals] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:5000/api/rent/${userId}`)
      .then((res) => res.json())
      .then((data) => setRentals(data))
      .catch((err) => console.log("Error fetching rentals:", err));
  }, [userId]);

  if (!userId) return <p className="text-center mt-6">Please log in first.</p>;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">My Rentals</h2>
      {rentals.length === 0 ? (
        <p>No rentals found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentals.map((rental) => (
            <div key={rental._id} className="bg-white p-4 rounded-xl shadow border">
              <img
                src={rental.carId?.image}
                alt={rental.carId?.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{rental.carId?.name}</h3>
              <p className="text-gray-600">{rental.carId?.brand}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRentals;
