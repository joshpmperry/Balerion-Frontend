import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

// Create Schema for Memo Cards
const memoSchema = new mongoose.Schema({
  memoId: { 
    type: Number,
    required: false
  },
  bodyText: {
    type: String,
    required: true
  },
  role: { 
    type: String,
    enum: ["USER", "ADMIN"],
    required: true 
  }
}, {
  timestamps: true // createdAt, will be used to display in order of newest first
});

// An Auto-Increment since MongoDB doesn't have a built-in auto-increment feature using mongoose-sequence
const AutoIncrement = mongooseSequence(mongoose);

memoSchema.plugin(AutoIncrement, { inc_field: "memoId" });

// Create Model
const MemoCard = mongoose.model("MemoCard", memoSchema);

export default MemoCard;