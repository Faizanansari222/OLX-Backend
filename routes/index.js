// import express from "express";
const express = require("express");
// import Product from "../models/Products";
const product = require("./product");
const router = express.Router();

router.use("/products", product);

module.exports =  router;
