import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../actions/userActions";

function ProductsScreen(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [numReview, setNumReview] = useState("");
  const productSave = useSelector((state) => state.productSave); // redux store value 조회
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct(
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        numReview,
        description,
        rating
      )
    );
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Create Product</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <lable htmlFor="name">Name</lable>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <lable htmlFor="price">Price</lable>
            <input
              type="text"
              name="price"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </li>
          <li>
            <lable htmlFor="image">Image</lable>
            <input
              type="text"
              name="image"
              id="image"
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </li>
          <li>
            <lable htmlFor="name">Brand</lable>
            <input
              type="text"
              name="brand"
              id="brand"
              onChange={(e) => setBrand(e.target.value)}
            ></input>
          </li>
          <li>
            <lable htmlFor="name">Category</lable>
            <input
              type="text"
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            ></input>
          </li>
          <li>
            <lable htmlFor="name">Rating</lable>
            <input
              type="text"
              name="rating"
              id="rating"
              onChange={(e) => setRating(e.target.value)}
            ></input>
          </li>
          <li>
            <lable htmlFor="name">numReview</lable>
            <input
              type="text"
              name="numReview"
              id="numReview"
              onChange={(e) => setNumReview(e.target.value)}
            ></input>
          </li>
          <li>
            <lable htmlFor="name">Description</lable>
            <textarea
              type="text"
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </li>
          <li>
            <button type="submit" className="button primary">
              Create
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ProductsScreen;
