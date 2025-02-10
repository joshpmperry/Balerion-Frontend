import { Router } from "express";

import MemoCard from "../models/memo.model.js";

const memoRouter = Router();

memoRouter.get("/", async (req, res) => {
  try {
    const allMemoCards = await MemoCard.find({});
    // check if user is admin
    const isAdmin = true;
    if (isAdmin){
      // newest first for admin
      const memoCards = await MemoCard.find().sort({ createdAt: -1 });
      res.status(200).json({sucess: true, data: allMemoCards});
    } else { 
      // oldest first for non-admin
      const memoCards = await MemoCard.find().sort({ createdAt: 1 });
      res.status(200).json({sucess: true, data: allMemoCards});
    }
  } catch (error) {
    res.status(500).json({sucess: false, data: "Server Error"}); 
  }
})


// Create Memo Cards route
memoRouter.post("/create", async (req, res) => {
  const memoCard = req.body;
  if (!memoCard.bodyText || !memoCard.role) {
    return res.status(400).send("Please provide memoId, bodyText and role");
  }

  const newMemoCard = new MemoCard(memoCard);

  try {
    await newMemoCard.save();
    res.status(201).json({sucess: true, data: newMemoCard});
  } catch (error){
    console.log("Memo Card could not be created", error.message);
  }
})

export default memoRouter;