const express = require('express')
const Products = require( '../models/Products')

const router = express.Router()

router.get('/', async (req, res) => {
  const data = await Products.find()
  res.send({ message: 'Products fetched successfully!', data })
})
router.post('/addproduct', async (req, res) => {
  const user = new Products.create(req.body)
  // const data = await Products.find()
  res.send({ message: 'Products added successfully!' })
})

module.exports =  router