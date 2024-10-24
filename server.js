const express = require("express");
const db = require("./DB/connectDB.js");
const cors = require("cors");
const router = require("./router/auth-router.js");

const app = express();
const PORT = 4009;
const corseOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  method: "GET,POST,PUT,DELETE,PATCH",
  credentials: true,
};

app.use(cors(corseOptions));
app.use(express.json());
app.use("/", router);


db().then(() => {
  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
