import RentalCard from "../components/RentalCard";

const MyRentals = () => {
  const rentals = [
    {
      id: 1,
      carName: "Tesla Model 3",
      status: "Cancelled",
      pickup: "Nov 10, 2025",
      dropoff: "Nov 15, 2025",
      total: 400,
    },
    {
      id: 2,
      carName: "Toyota Camry",
      status: "Cancelled",
      pickup: "Nov 13, 2025",
      dropoff: "Nov 13, 2025",
      total: 65,
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">My Rentals</h2>

      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <h3 className="text-lg font-medium mb-5 text-gray-800">Past Rentals</h3>

        <div className="flex flex-col gap-5">
          {rentals.map((rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRentals;
