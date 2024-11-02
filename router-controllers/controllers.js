const Products = require("../models/Products.js");

const productsGet = async (req, res) => {
      try {
        const productGet = await Products.find();
        res.status(200).send({ productGet });
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
};



const singleProductGet = async (req, res) => {

      try {
        const productGet = await Products.findById(req.params.id).exec();
        res.status(200).send({ productGet });
      } catch (error) {
        res.status(400).send({ message: error.message });
      }

};



const productAdd = async (req, res) => {
  
      console.log(req.body);
      try {
        const productData = await Products.create(req.body);
        // console.log(productData);

        res.status(200).send({ productData });
      } catch (error) {
        res.status(400).send({ message: error.message });
      }

};

module.exports = { productsGet, productAdd, singleProductGet };
