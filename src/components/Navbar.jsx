import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
      <div className="flex items-center space-x-2">
        <div className="bg-blue-600 text-white rounded-lg p-2">
          🚗
        </div>
        <h1 className="text-xl font-semibold text-gray-800">QuickRent</h1>
      </div>

      <div className="flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full ${
              isActive ? "bg-gray-200 text-black" : "text-gray-600"
            }`
          }
        >
          Browse Cars
        </NavLink>
        <NavLink
          to="/my-rentals"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full ${
              isActive ? "bg-gray-200 text-black" : "text-gray-600"
            }`
          }
        >
          My Rentals
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
