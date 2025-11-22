// src/components/Funds.js

import React from "react";
// You can use the 'Link' component from react-router-dom if the buttons lead to different pages
import { Link } from "react-router-dom"; 
import '../index.css'; // Import the CSS file

const Funds = () => {
  // 1. Data for the Margin/Equity Breakdown (mimicking the screenshot)
  const marginData = [
    { label: "Available margin", value: "4,043.10" },
    { label: "Used margin", value: "3,757.30" },
    { label: "Available cash", value: "4,043.10" },
  ];

  const balanceData = [
    { label: "Opening Balance", value: "4,043.10" },
    { label: "Opening Balance", value: "3,728.40" },
    { label: "Payin", value: "4,064.00" },
    { label: "SPAN", value: "0.00" },
    { label: "Delivery margin", value: "0.00" },
  ];

  return (
    <div className="funds-page-container">
      {/* --- 1. Top Section (Buttons and Instant Transfer Note) --- */}
      <div className="funds-header">
        <div className="header-text">
          {/* Note: In the screenshot, the h1 "Funds" is implied by the URL, not explicitly on the page content */}
          <p className="instant-note">
            Instant, zero-cost fund transfers with UPI
          </p>
        </div>
        
        <div className="header-actions">
          {/* Use buttons or Link components */}
          <button className="btn-add-funds">Add Funds</button>
          <button className="btn-withdraw">Withdraw</button>
        </div>
      </div>

      {/* --- 2. Equity Breakdown Box --- */}
      <div className="equity-box-container">
        <h2>Equity</h2>
        
        {/* Margin Details */}
        <div className="margin-details">
          {marginData.map((item, index) => (
            <div key={index} className="detail-row">
              <span className="detail-label">{item.label}</span>
              <span className="detail-value margin-value">{item.value}</span>
            </div>
          ))}
        </div>
        
        <hr className="divider" /> {/* Visual separator */}

        {/* Balance Details */}
        <div className="balance-details">
          {balanceData.map((item, index) => (
            <div key={index} className="detail-row">
              <span className="detail-label">{item.label}</span>
              <span className="detail-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Placeholder for the commodity account note (implied in the screenshot) */}
      <p className="commodity-note">You don't own a commodity account</p>

    </div>
  );
};

export default Funds;