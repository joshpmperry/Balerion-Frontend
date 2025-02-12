import mongoose from "mongoose";

// Create Schema for Memo Cards
const memoSchema = new mongoose.Schema({
  role: { 
    type: String,
    enum: ["USER", "ADMIN"],
    required: true 
  },
  bodyText: {
    type: String,
    required: true
  },
}, {
  timestamps: true // createdAt, will be used to display in order of newest first (Admin), oldest first (User)
});

// Create Model
const MemoCard = mongoose.model("MemoCard", memoSchema);

export default MemoCard;