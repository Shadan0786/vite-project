import mongoose from "mongoose";

const rentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
  rentedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Rent", rentSchema);
