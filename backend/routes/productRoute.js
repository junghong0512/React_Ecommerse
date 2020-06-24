import express from "express";
import Product from "../models/productModel";

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

router.put("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findOne({ _id: productId });
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;

    const updatedProduct = await product.save();
    if (updatedProduct) {
      // Updating item
      return res
        .status(201)
        .send({ message: "Product Updated.", data: updatedProduct });
    }
  }
  return res.status(500).send({ message: "Error in Updating Product." });
});

export default router;
