import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5   border-top">
        <h3 className="text-center">People</h3>
      </div>

      <div className="row   text-muted text-center">
        <div className="col-6 p-3  ">
          <img
            src="images/nithinKamath.jpg"
            style={{ borderRadius: "50%", width: "300px", marginRight:"15px"}}
          />
          <h4 className="p-3 text-center">Nithin Kamath</h4>
          <h6 className=" text-muted text-center ">Founder, CEO</h6>
        </div>

        <div className="col-6 p-3 mb-3 text-muted text-start ">
            <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the
          hurdles he faced during his decade long stint as a trader. Today,
          Zerodha has changed the landscape of the Indian broking industry. </p> <p>He
          is a member of the SEBI Secondary Market Advisory Committee (SMAC) and
          the Market Data Advisory Committee (MDAC). </p><p>Playing basketball is his
          zen. </p><p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> /  <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /  <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
