import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";

import memoRouter from "./routes/memo.route.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

// .env
dotenv.config();

// Initialize express
const app = express();

// allows to accept json data in req.body
app.use(express.json());

// Routes 
app.use('/api/memo', memoRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// Invalid Routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// listen to port
app.listen(5050, () => {
  connectDB();
  console.log("Server started at http://localhost:5050");
})