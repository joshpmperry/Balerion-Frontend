import { Router } from "express";
import User from "../models/user.model.js";


const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "works"});
})


// Only was used for creating the mock users and admins
userRouter.post("/create", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const newUser = new User({ name, email, password, role});
    await newUser.save();

    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    console.error("Memo creation error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


export default userRouter;