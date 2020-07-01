import express from "express";
import config from "./config";
import mongoose from "mongoose";
import path from "path";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import orderRoute from "./routes/orderRoute";

const mongodbUrl = config.MONGODB_URL;

const PORT = process.env.PORT || 5050;

// Connect to the MongoDB
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason)); // see if any error in mongoose

const app = express();

app.use(bodyParser.json()); // middleware for reading the data
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("fontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build")); // relative path
  });
}

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});
