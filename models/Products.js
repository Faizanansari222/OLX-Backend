// import mongoose from "mongoose";
const mongoose = require("mongoose");

// Destructure Schema from mongoose
const { Schema, model } = mongoose;

// Define the Product Schema
const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    province: { type: String, required: true },
    date: { type: Date, default: new Date() },
    description: { type: String },
    image: { type: String },
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt fields

// Create the Product Model
const Product = model("Product", productSchema);

module.exports = Product;
