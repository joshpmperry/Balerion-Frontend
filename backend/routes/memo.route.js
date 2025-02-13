import { Router } from "express";
import MemoCard from "../models/memo.model.js";

const memoRouter = Router();

memoRouter.get("/:role", async (req, res) => {
  try {
    const role = req.params.role;
    const isAdmin = role === "ADMIN";

    // Sort based on role
    const query = role === "ADMIN" ? {} : { role: "USER" };
    const memoCards = await MemoCard.find(query).sort({ createdAt: isAdmin ? -1 : 1 });

    res.status(200).json({ success: true, data: memoCards });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
});

memoRouter.post("/create", async (req, res) => {
  try {
    const { bodyText, role } = req.body;
    if (!bodyText || !role) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const newMemoCard = new MemoCard({ bodyText, role });
    await newMemoCard.save();

    res.status(201).json({ success: true, data: newMemoCard });
  } catch (error) {
    console.error("Memo creation error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default memoRouter;