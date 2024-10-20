const express = require("express");
const connectDB = require("./DB/connectDB.js");
const app = express();
const PORT = 4007;
app.get("/", (req, res) => {
  res.status(500).json("Hello World kia haal chal");
});


app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
  });

