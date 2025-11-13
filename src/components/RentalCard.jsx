import { CalendarDays, DollarSign } from "lucide-react";

const RentalCard = ({ rental }) => {
  const { carName, status, pickup, dropoff, total } = rental;

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
      {/* Car name + status */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{carName}</h3>
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
            status === "Cancelled"
              ? "bg-red-600 text-white"
              : status === "Completed"
              ? "bg-green-600 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Dates + total */}
      <div className="flex justify-between mt-4 flex-wrap text-sm text-gray-700">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>
              <strong>Pick-up:</strong> {pickup}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>
              <strong>Drop-off:</strong> {dropoff}
            </span>
          </div>
        </div>

        <div className="flex items-center mt-4 md:mt-0">
          <DollarSign size={18} className="text-gray-800" />
          <span className="font-medium text-gray-800">Total: ${total}</span>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;
