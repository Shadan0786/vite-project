import Rent from "../models/Rent.js";


export const rentCar = async (req, res) => {
  try {
    const { userId, carId } = req.body;

    if (!userId || !carId) {
      return res.status(400).json({ error: "Missing userId or carId" });
    }

    const newRent = new Rent({ userId, carId });
    await newRent.save();

    res.status(201).json({ message: "Car rented successfully", rent: newRent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Backend error", details: err.message });
  }
};


export const getUserRentals = async (req, res) => {
  try {
    const rentals = await Rent.find({ userId: req.params.userId })
      .populate("carId"); 
    res.json(rentals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching rentals" });
  }
};
