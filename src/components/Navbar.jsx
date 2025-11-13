import React from "react";
import { Car } from "lucide-react";

const Navbar = () => {
    return (
        <>

            <div className="max-w-7xl bg-white mx-auto flex items-center justify-between px-6 py-4">
              
                <div className="flex items-center space-x-3">
                    <div className="bg-blue-600 text-white p-2 rounded-xl">
                        <Car className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-gray-900">QuickRent</h1>
                        <p className="text-sm text-gray-500">
                            Your premium car rental service
                        </p>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Navbar;
