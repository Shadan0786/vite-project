import React from "react";
import { Search } from "lucide-react";

const FilterSection = () => {
  return (
    <div className="max-w-7xl mx-auto  bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Find Your Perfect Car
      </h2>

      
      <div className="flex flex-col md:flex-row items-center gap-4">
        
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search cars..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        
        <select className="w-full md:w-48 px-4 py-2 border border-gray-200 rounded-xl text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
          <option>All Types</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Hatchback</option>
          <option>Electric</option>
        </select>

       
        <select className="w-full md:w-52 px-4 py-2 border border-gray-200 rounded-xl text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
          <option>All Transmission</option>
          <option>Manual</option>
          <option>Automatic</option>
        </select>

       
        <select className="w-full md:w-52 px-4 py-2 border border-gray-200 rounded-xl text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
