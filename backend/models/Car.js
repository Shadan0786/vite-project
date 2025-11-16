import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  type: { type: String, required: true },
  seats: { type: Number, required: true },
  transmission: { type: String, required: true },
  fuel: { type: String, required: true },
  features: [{ type: String }],
  available: { type: Boolean, default: true },
  image: { type: String }
});

const Car = mongoose.model("Car", carSchema);

export default Car;
