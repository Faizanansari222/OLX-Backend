// import express from "express";
const express = require("express");
// import Product from "../models/Products";
const Product = require("../practic01/models/Products");
const router = express.Router();

router.use("/products", Product);

module.exports =  router;
