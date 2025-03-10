import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"]
    },
    address: String,
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Invalid email format"]
    },
    age: Number,
    deleted: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: new Date()
    },
    updatedAt: Date
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema, "users");

export default User;
