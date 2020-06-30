import React, { useState, useEffect } from "react";
import { logout, update } from "../actions/userActions";
import { listMyOrders } from "../actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProfileScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  };

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin; // for checking userInfo in the useEffect

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }));
  };

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, success, error } = userUpdate;

  const myOrderList = useSelector((state) => state.myOrderList);
  const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPassword(userInfo.password);
    }
    dispatch(listMyOrders());
  }, []);

  return (
    <div className="profile content-margined">
      <div className="profile-info">
        <div>
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>User Profile</h2>
              </li>
              <li>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {success && <div>Profile Saved Successfully.</div>}
              </li>
              <li>
                <lable htmlFor="name">Name</lable>
                <input
                  value={name}
                  type="name"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li>
                <lable htmlFor="email">Email</lable>
                <input
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </li>
              <li>
                <button type="submit" className="button primary">
                  Update
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="button secondary full-width"
                >
                  Logout
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="profile-orders content-margined">
        {loadingOrders ? (
          <div>Loading...</div>
        ) : errorOrders ? (
          <div>{errorOrders}</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid}</td>
                  <td>
                    <Link to={"/order/" + order._id}>DETAILS</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ProfileScreen;
