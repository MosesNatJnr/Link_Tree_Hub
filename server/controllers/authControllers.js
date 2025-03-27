import User from "../models/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()

export const register = async (req, res) => {
  try {
    const { userName, firstName, lastName, password, email } = req.body;

    // Validate input fields
    if (!userName || !firstName || !lastName || !password || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ userName });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to the database
    await User.create({
      userName,
      firstName,
      lastName,
      password: hashedPassword,
      email,
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if identifier is email or username
    const isEmail = emailRegex.test(identifier);

    const user = isEmail
      ? await User.findOne({ email: identifier })
      : await User.findOne({ userName: identifier });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Logged in successfully", token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
