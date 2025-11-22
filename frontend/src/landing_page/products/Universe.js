import React from "react";

function Universe() {
  return (
    <div className="container">
      {/* Container for Heading and Subheading */}
      <div className="row mt-5 p-5">
        <div className="col-12">
          <h2 className="text-center">The Zerodha Universe</h2>
          <p className="fs-5 p-4 text-center text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      {/* FIRST ROW OF PARTNERS: ZERODHA FUND HOUSE, SENSIBULL, TIJORI */}
      <div className="row justify-content-center px-5 gx-5">
        
        {/* Zerodha Fund House (Top Left) */}
        <div className="col-lg-4 col-md-6 mt-5 p-3">
          <img src="/images/zerodhaFundhouse.png" style={{ width: "200px" }} alt="Zerodha Fund House Logo" />
          <p className="mt-2 text-muted" style={{ fontSize: "11px" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        {/* Sensibull (Top Middle) - MOVED HERE */}
        <div className="col-lg-4 col-md-6 mt-5 p-3">
          <img src="/images/sensibullLogo.svg" style={{ width: "200px" }} alt="Sensibull Logo" />
          <p className="mt-2 text-muted" style={{ fontSize: "11px" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and more.
          </p>
        </div>

        {/* Tijori (Top Right) - MOVED HERE */}
        <div className="col-lg-4 col-md-6 mt-5 p-3">
          <img src="/images/logo-2.png" style={{ width: "200px" }} alt="Tijori Logo" /> 
          <p className="mt-2 text-muted" style={{ fontSize: "11px" }}>
            Investment research platform that offers detailed insights on stocks,
            sectors, supply chains, and more.
          </p>
        </div>
      </div>

      {/* SECOND ROW OF PARTNERS: STREAK, SMALLCASE, DITTO */}
      <div className="row justify-content-center px-5 gx-5 mb-5">
        
        {/* Streak (Bottom Left) - MOVED HERE */}
        <div className="col-lg-4 col-md-6 mt-5 p-3">
          <img src="/images/streakLogo.png" style={{ width: "200px" }} alt="Streak Logo" />
          <p className="mt-2 text-muted" style={{ fontSize: "11px" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        
        {/* Smallcase (Bottom Middle) - MOVED HERE */}
        <div className="col-lg-4 col-md-6 mt-5 p-3">
          <img src="/images/smallcaseLogo.png" style={{ width: "200px" }} alt="Smallcase Logo" />
          <p className="mt-2 text-muted" style={{ fontSize: "11px" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        {/* Ditto (Bottom Right) - MOVED HERE */}
        <div className="col-lg-4 col-md-6 mt-5 p-3">
          <img src="/images/dittoLogo.png" style={{ width: "100px" }} alt="Ditto Logo" />
          <p className="mt-2 text-muted" style={{ fontSize: "11px" }}>
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
      </div>
      
      {/* ADDED 'Sign up for free' button as shown in the screenshot */}
      <div className="row justify-content-center mb-5">
        <div className="col-auto">
            <button className="btn btn-primary p-3" style={{ fontSize: '20px', margin: "0 auto" }}>
                Sign up for free
            </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;