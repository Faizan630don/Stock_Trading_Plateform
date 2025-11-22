import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(existing);
  }, []);

  if (!orders.length) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">Get started</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders" style={{ padding: 20 }}>
      <h3 className="title">Recent Orders</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th className="align-left">Instrument</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr key={i}>
                <td className="align-left">{o.name}</td>
                <td>{o.qty}</td>
                <td>{o.price}</td>
                <td>{o.mode}</td>
                <td>{new Date(o.ts).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;