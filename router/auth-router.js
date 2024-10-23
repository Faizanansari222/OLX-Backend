const express = require("express");
const {productsGet , productAdd} = require("../router-controllers/controllers.js");

const router = express.Router();

router.route("/").get(productsGet);
router.route("/addproduct").post(productAdd);

module.exports = router;










































// router.post("/addproduct", async (req, res) => {
//   const user = new Products.create(req.body);
//   // const data = await Products.find()
//   res.status(200).send({ message: "Products added successfully!", });
// });

// router.use("/api/products", require("./product.js"));