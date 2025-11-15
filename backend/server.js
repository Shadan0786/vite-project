
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());


app.get("/api/cars", (req, res) => {
  res.json([
    {
      name: "Honda Civic",
      brand: "Honda",
      type: "Sedan",
      seats: 5,
      transmission: "Manual",
      fuel: "Petrol",
      features: ["Fuel Efficient", "Apple CarPlay"],
      available: true,
      image: "https://imgd.aeplcdn.com/370x208/n/cw/ec/57779/right-rear-three-quarter0.jpeg?wm=1&q=80"
    },
    {
      name: "BMW X5",
      brand: "BMW",
      type: "Sedan",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      features: ["Fuel Efficient", "Apple CarPlay"],
      available: false,
      image: "https://bmw.scene7.com/is/image/BMW/f95_standalone-f95_carousel-columns_exterior_m60xdrive_msportpackage?wid=2559&hei=2560"
    },
    {
      name: "innova crysta",
      brand: "Toyota",
      type: "MPV",
      seats: 7,
      transmission: "Manual",
      fuel: "Diesel",
      features: ["Fuel Efficient", "Apple CarPlay"],
      available: false,
      image: "https://marketplace-cdn.cars24.com/production/41014402746/main%20image/2025-11-04/car_replace_bg_8ea0c0b7-4ea1-4d47-aaa4-750847a8cc01.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto"
    },
  ]);
});



mongoose.connect("mongodb://127.0.0.1:27017/quickrent")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
