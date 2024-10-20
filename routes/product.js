const express = require('express')
const Products = require( '../models/Products')

const router = express.Router()

router.get('/', async (req, res) => {
  const data = await Products.find()
  res.send({ message: 'Products fetched successfully!', data })
})

module.exports =  router