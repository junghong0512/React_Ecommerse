import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";

function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems, shipping, payment } = cart;
  if (!shipping) {
    props.history.push("/shipping");
  } else if (!payment) {
    props.history.push("/payment");
  }

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 20000 ? 0 : 2500;
  const taxPrice = 0.1 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // create an order
  };

  useEffect(() => {}, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>Shipping</h3>
            <div>
              {shipping.address},{shipping.addressDetail},{shipping.postalCode},{" "}
              {shipping.phoneNumber}
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>Payment Method: {payment.paymentMethod}</div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>Shopping Cart</h3>
                <div>Price</div>
              </li>
              {cartItems.length === 0 ? (
                <div>Cart is Empty</div>
              ) : (
                cartItems.map((item) => (
                  <li>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>{item.name}</Link>
                      </div>
                      <div>Qty:{item.qty}</div>
                    </div>
                    <div className="cart-price">￦{item.price}</div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="placeorder-action">
          <ul>
            <li>
              <button
                onClick={checkoutHandler}
                className="button primary full-width"
                disabled={cartItems.length === 0}
                onClick={placeOrderHandler}
              >
                Place Order
              </button>
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>{itemsPrice}원</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>{shippingPrice}원</div>
            </li>
            <li>
              <div>Tax</div>
              <div>{taxPrice}원</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>{totalPrice}원</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrderScreen;
