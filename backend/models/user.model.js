import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String, // Hashed password for security
    required: true
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    required: true
  }
});



const User = mongoose.model("User", userSchema);

export default User;