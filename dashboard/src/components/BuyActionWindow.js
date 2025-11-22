import React, { useState, useContext } from "react";
import axios from "axios";


import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const context = useContext(GeneralContext);

  const handleBuyClick = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const order = {
      name: uid,
      qty: parseInt(stockQuantity),
      price: parseFloat(stockPrice),
      mode,
      ts: Date.now(),
    };
    try {
      await axios.post("http://localhost:3002/newOrder", order);
      alert(`${mode} order placed successfully!`);
      context.closeBuyWindow();
    } catch (error) {
      const existing = JSON.parse(localStorage.getItem("orders") || "[]");
      localStorage.setItem("orders", JSON.stringify([order, ...existing]));
      setTimeout(() => {
        alert(`${mode} order placed successfully (simulated)!`);
        context.closeBuyWindow();
      }, 600);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    context.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="header">
        <h3>{mode === "BUY" ? "Buy" : "Sell"} {uid}</h3>
      </div>
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick} disabled={isSubmitting}>
            {isSubmitting ? "Placing..." : (mode === "BUY" ? "Buy" : "Sell")}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
