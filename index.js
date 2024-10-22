const express = require("express");
const db = require("./DB/connectDB.js");
const router = require("./routes/index.js");

const app = express();
const PORT = 4007;
// app.get("/", (req, res) => {
//   res.status(500).json("Hello World kia haal chal");
// });
// db.connection.once('open', () => console.log("connected to db"))
app.listen(PORT, () => {
  db();
  console.log(`Server is running on port ${PORT}`);
});

app.use("/", router);
app.use(express.json());
