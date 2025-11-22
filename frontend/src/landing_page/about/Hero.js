import React from 'react'
function Hero() {
    return ( 
        <div className="container">
      {/* Centered Heading */}
      <div className="row mt-5 p-5 ">
        <div className="col-12">
          <h3 className="text-center ">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h3>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <hr />
        </div>
      </div>

      {/* Main Content - This row will contain the two side-by-side columns */}
      <div className="row mt-5   p-5 text-muted gx-5">
        
        {/* First paragraph - takes up 6 columns (half the width) */}
        <div className="col-2"></div>
        <div className="col-lg-4 col-md-12 p-3 fs-6"> 
            <p>
          We kick-started operations on the 15th of August, 2010 with the goal
          of breaking all barriers that traders and investors face in India in
          terms of cost, support, and technology. We named the company
          Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
          barrier.</p>
          <p>
          Today, our disruptive pricing models and in-house technology have
          made us the biggest stock broker in India.
          </p>
          <p>
          Over 1.6+ crore clients place billions of orders every year through
          our powerful ecosystem of investment platforms, contributing over
          15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* Second paragraph - takes up 6 columns (the other half) */}
        <div className="col-lg-4 col-md-12 p-3 fs-6"> 
            <p>
          In addition, we run a number of popular open online educational and
          community initiatives to empower retail traders and investors.</p>
          <p>
          Rainmatter, our fintech fund and incubator, has invested in several
          fintech startups with the goal of growing the Indian capital
          markets.</p>
          <p>
          And yet, we are always up to something new every day. Catch
          up on the latest updates on our blog or see what the media is saying
          about us or learn more about our business and product philosophies.
          </p>
        </div>
        
      
        
        
      </div>
    </div>
     );
}

export default Hero;