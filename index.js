const express = require("express");
const connectDB = require("./DB/connectDB.js");
// const router = require("./routes/index.js");

const app = express();
const PORT = 4007;
// app.get("/", (req, res) => {
//   res.status(500).json("Hello World kia haal chal");
// });
    
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

// app.use(express.json());
// app.use("/", router);
