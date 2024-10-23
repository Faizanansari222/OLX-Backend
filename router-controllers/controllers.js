const Products = require("../models/Products.js");

const productsGet = async (req, res) => {
  try {
    res.status(200).send({ message: "Products fetched successfully!" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
const productAdd = async (req, res) => {
    console.log(req.body);
    try {
        const productData = await Products.create(req.body);
        console.log(productData);
    
    res.status(200).send({message: req.body, productData: productData});
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { productsGet, productAdd };
