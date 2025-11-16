import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

   
    const hashedPassword = await bcrypt.hash(password, 12);

   
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    
    res.status(201).json({
      message: "Signup successful",
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

       
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

       
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

      
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" } 
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};