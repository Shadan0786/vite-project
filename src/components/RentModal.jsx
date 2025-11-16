import React from "react";

const RentModal = ({ selectedCar, closeModal }) => {
    const confirmRent = async () => {
        const userId = localStorage.getItem("userId");
        const carId = selectedCar?._id;
        console.log("User ID:", localStorage.getItem("userId"));
        console.log("Selected Car:", selectedCar);

        if (!userId || !carId) {
            alert("Missing userId or carId. Please login or select a car.");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/rent/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, carId }),
            });

            const data = await res.json();
            console.log("Rent Added:", data);

            if (res.ok) {
                alert("Car rented successfully!");
                closeModal();
            } else {
                alert(data.error || "Error renting car");
            }
        } catch (err) {
            console.error(err);
            alert("Backend error. Check console.");
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                    onClick={closeModal}
                >
                    ✖
                </button>
                <h2 className="text-2xl font-semibold mb-4">Confirm Rent</h2>
                <p>Are you sure you want to rent: <strong>{selectedCar.name}</strong>?</p>
                <button
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
                    onClick={confirmRent}
                >
                    Confirm Rent
                </button>
            </div>
        </div>
    );
};

export default RentModal;
