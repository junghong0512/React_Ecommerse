import mongoose from "mongoose";

// How User will be save in the MongoDB database
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // unique -> same name is possible not email
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false }, // default user is not Admin
});

// Create Model ("User": name of the collection saved in mongoDB)
const userModel = mongoose.model("User", userSchema);

export default userModel;
