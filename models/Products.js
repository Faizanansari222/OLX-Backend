// import mongoose from "mongoose";
const mongoose = require("mongoose");


// Destructure Schema from mongoose
const { Schema, model } = mongoose;

// Define the Product Schema
const productSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String },
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

// Create the Product Model
const Product = model("Product", productSchema);

module.exports =  Product;
