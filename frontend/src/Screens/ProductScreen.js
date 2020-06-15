import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function ProductScreen(props) {
  const product = data.products.find(
    (item) => item._id === props.match.params.id
  );

  return (
    <div>
      <div className="back-to-home">
        <Link to="/">Back to Home</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              Price: <b>￦{product.price}</b>
            </li>
            <li>
              Description:
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: {product.price}</li>
            <li>Status: {product.price}</li>
            <li>
              Qty:{" "}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="details-add-cart-btn primary">
                Add to Cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
