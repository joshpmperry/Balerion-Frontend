import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";

import memoRouter from "./routes/memo.route.js";
import authRouter from "./routes/auth.route.js";

// .env
dotenv.config();

const frontend_url = process.env.FROTEND_URL;

// Initialize express
const app = express();

// allows to accept json data in req.body
app.use(express.json());

// Security to prevent unauthorized access to backend (only allow frontend)
app.use(cors({
  origin: frontend_url,
  methods: [
    "GET",
    "POST",
    // TODO: make sure to check if these are needed or not
    // "PUT",
    // "DELETE"
  ],
  credentials: true
}));

// Routes 
app.use('/memo', memoRouter);
app.use('/auth', authRouter);

// Invalid Routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// listen to port
app.listen(5050, () => {
  connectDB();
  console.log("Server started at http://localhost:5050");
})