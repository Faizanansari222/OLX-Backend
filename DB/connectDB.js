const mongoose = require("mongoose");
// import mongoose from "mongoose";
const URI ="mongodb+srv://faizanpardesi07:ZDc86v5Pwx5atmn4@olx-cluster.vgb5p.mongodb.net/OLX-Clone?retryWrites=true&w=majority";
const connectDB = async () => {
  // pi3GffEhrcQNxJgi || ZDc86v5Pwx5atmn4
  try {
    await mongoose.connect(URI);
    console.log(`Database connected successfully ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error.message +  "DB not connected");
  }
};

module.exports = connectDB;
