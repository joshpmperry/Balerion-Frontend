import { Router } from "express";
import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';

const authRouter = Router();

// Authentication route
authRouter.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    if (!name || !password) {
      return res.status(400).send("Please provide name and password");
    }

    const user = await User.findOne({ name });
    // Check password
    if (!user || !(await user.comparePassword(password))) { 
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email, role: user.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );
    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Login failed' });
  }
});

authRouter.post('/logout', (req, res) => {
  return res.status(201).json({ success: true, data: "Logout is successful" });
});

export default authRouter;