import React from "react";
import { Car } from "lucide-react";

const Navbar = ({ openLogin, openSignup, user, onLogout }) => {
  return (
    <div className="max-w-7xl bg-white mx-auto flex items-center justify-between px-6 py-4 shadow">


      <div className="flex items-center space-x-3">
        <div className="bg-blue-600 text-white p-2 rounded-xl">
          <Car className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">QuickRent</h1>
          <p className="text-sm text-gray-500">Your premium car rental service</p>
        </div>
      </div>


      <div className="flex items-center space-x-4">

        {user ? (
          <>

            <span className="text-gray-700 font-medium">
              Hi, {user.name || "User"}
            </span>


            <button
              onClick={onLogout}
              className="px-5 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>

            <button
              onClick={openLogin}
              className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
            >
              Login
            </button>


            <button
              onClick={openSignup}
              className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default Navbar;
