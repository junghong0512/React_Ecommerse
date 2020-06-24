import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../actions/productActions";

function ProductsScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const productSave = useSelector((state) => state.productSave); // redux store value 조회
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
      })
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
            {loadingSave && <div>Loading...</div>}
            {errorSave && <div>{errorSave}</div>}
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
            <lable htmlFor="brand">Brand</lable>
            <input
              type="text"
              name="brand"
              id="brand"
              onChange={(e) => setBrand(e.target.value)}
            ></input>
          </li>
          <li>
            <lable htmlFor="countInStock">countInStock</lable>
            <input
              type="text"
              name="countInStock"
              id="countInStock"
              onChange={(e) => setCountInStock(e.target.value)}
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
            <lable htmlFor="name">Description</lable>
            <textarea
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
