import React from 'react';

const NavTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center bg-gray-100 rounded-full mx-auto my-6 w-fit">
      <button
        onClick={() => setActiveTab('browse')}
        className={`px-6 py-2 rounded-full font-medium transition ${
          activeTab === 'browse'
            ? 'bg-white shadow text-gray-900'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Browse Cars
      </button>
      <button
        onClick={() => setActiveTab('rentals')}
        className={`px-6 py-2 rounded-full font-medium transition ${
          activeTab === 'rentals'
            ? 'bg-white shadow text-gray-900'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        My Rentals
      </button>
    </div>
  );
};

export default NavTabs;
