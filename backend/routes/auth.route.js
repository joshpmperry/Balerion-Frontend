import { Router } from "express";
import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';

const authRouter = Router();

//  Authentication route
authRouter.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
      if (!name || !password) {
        return res.status(400).send("Please provide name and password");
      }
      
      const user = await User.findOne({ name });
    
      if (!user || !(await user.comparePassword(password))) { // Check password
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: 'Login failed' }); // Better error handling
    }
  }
)

authRouter.post('/logout', (req, res) => {
  return res.status(201).json({sucess: true, data: "Logout is successful"});
})

export default authRouter;