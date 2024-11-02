const express = require("express");
const {productsGet , productAdd, singleProductGet} = require("../router-controllers/controllers.js");

            const router = express.Router();

            router.route("/products/").get(productsGet),
            router.route("/singleproduct/:id").get(singleProductGet);
            router.route("/addproduct").post(productAdd);

 module.exports = router;










































// router.post("/addproduct", async (req, res) => {
//   const user = new Products.create(req.body);
//   // const data = await Products.find()
//   res.status(200).send({ message: "Products added successfully!", });
// });

// router.use("/api/products", require("./product.js"));