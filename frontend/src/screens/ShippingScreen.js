import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShipping } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function ShippingScreen(props) {
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, addressDetail, postalCode, phoneNumber }));
    props.history.push("payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 />
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Shipping</h2>
            </li>
            <li>
              <lable htmlFor="address">Address</lable>
              <input
                type="text"
                name="address"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </li>
            <li>
              <lable htmlFor="addressDetail">Address Detail</lable>
              <input
                type="text"
                name="addressDetail"
                id="addressDetail"
                onChange={(e) => setAddressDetail(e.target.value)}
              ></input>
            </li>
            <li>
              <lable htmlFor="postalCode">Postal Code</lable>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                onChange={(e) => setPostalCode(e.target.value)}
              ></input>
            </li>
            <li>
              <lable htmlFor="phoneNumber">Phone Number</lable>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
            </li>

            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default ShippingScreen;
