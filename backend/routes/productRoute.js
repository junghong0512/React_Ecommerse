import express from "express";
import Product from "../models/productModel";
import { getToken } from "../util";

const router = express.Router();

// Getting the lists of the product, send to the user
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

// Create the product
router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  const newProduct = await product.save();
  if (newProduct) {
    // Creating item
    return res
      .status(201)
      .send({ message: "New Product Created.", data: newProduct });
  }
  // If Error
  return res.status(500).send({ message: "Error in Creating Product." });
});

export default router;
