import mongoose from "mongoose";

// How Product will be save in the MongoDB database
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  category: { type: String, required: true },
  countInStock: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
});

// Create Model ("Product": name of the collection saved in mongoDB)
const productModel = mongoose.model("Product", productSchema);

export default productModel;
