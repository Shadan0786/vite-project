import React from "react";
import { Calendar, DollarSign } from "lucide-react";

const rentals = [
  {
    id: 1,
    car: "Tesla Model 3",
    status: "Cancelled",
    pickup: "Nov 10, 2025",
    dropoff: "Nov 15, 2025",
    total: 400,
  },
  {
    id: 2,
    car: "Toyota Camry",
    status: "Cancelled",
    pickup: "Nov 13, 2025",
    dropoff: "Nov 13, 2025",
    total: 65,
  },
];

const MyRentals = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-8">
      <div className="max-w-7xl  w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">My Rentals</h1>
        <h2 className="text-lg font-medium text-gray-600 mb-6">Past Rentals</h2>

        <div className="space-y-4">
          {rentals.map((rental) => (
            <div
              key={rental.id}
              className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white"
            >
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {rental.car}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    rental.status === "Cancelled"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {rental.status}
                </span>
              </div>

             
              <div className="flex justify-between text-gray-600 text-sm mt-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <div>
                    <p className="text-xs">Pick-up</p>
                    <p className="font-medium">{rental.pickup}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <div>
                    <p className="text-xs">Drop-off</p>
                    <p className="font-medium">{rental.dropoff}</p>
                  </div>
                </div>
              </div>

            
              <div className="flex items-center gap-2 mt-3 text-gray-700">
                <DollarSign className="w-4 h-4" />
                <span className="font-medium">Total: ${rental.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRentals;
