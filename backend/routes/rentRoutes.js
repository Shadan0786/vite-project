import express from "express";
import Rent from "../models/Rent.js";
import { rentCar, getUserRentals } from "../controllers/rentController.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { userId, carId } = req.body;

    if (!userId || !carId) {
      return res.status(400).json({ error: "Missing userId or carId" });
    }

    const rent = new Rent({ userId, carId });
    await rent.save();

    res.json({ message: "Rent saved", rent });
  } catch (err) {
    res.status(500).json({ error: "Backend error", details: err.message });
  }
});

router.post("/rent", rentCar);         




router.get("/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        
        const rentals = await Rent.find({ userId }).populate("carId");
        
        res.json(rentals);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch rentals" });
    }
});

export default router;