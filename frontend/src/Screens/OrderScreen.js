import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsOrder } from "../actions/orderActions";

function OrderScreen(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsOrder(props.match.params.id));
    return () => {
      //
    };
  }, []); // []: rendering the order only once when the screen open

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order, error } = orderDetails;
  const payHandler = () => {};

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3>Shipping</h3>
          <div>
            {order.shipping.address}, {order.shipping.addressDetail},
            {order.shipping.postalCode}, ({order.shipping.phoneNumber})
          </div>
          <div>
            {order.isDelivered
              ? "Delivered At: " + order.deliveredAt
              : "Not Delivered"}
          </div>
        </div>
        <div>
          <h3>Payment</h3>
          <div>Payment Method: {order.payment.paymentMethod}</div>
          <div>{order.isPaid ? "Paid At: " + order.paidAt : "Not Paid"}</div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3>Shopping Cart</h3>
              <div>Price</div>
            </li>
            {order.orderItems.length === 0 ? (
              <div>Cart is Empty</div>
            ) : (
              order.orderItems.map((item, index) => (
                <li key={index}>
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
              onClick={payHandler}
              className="button primary full-width"
              disabled={order.orderItems.length === 0}
            >
              Pay Now
            </button>
          </li>
          <li>
            <h3>Order Summary</h3>
          </li>
          <li>
            <div>Items</div>
            <div>{order.itemsPrice}원</div>
          </li>
          <li>
            <div>Shipping</div>
            <div>{order.shippingPrice}원</div>
          </li>
          <li>
            <div>Tax</div>
            <div>{order.taxPrice}원</div>
          </li>
          <li>
            <div>Order Total</div>
            <div>{order.totalPrice}원</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OrderScreen;
