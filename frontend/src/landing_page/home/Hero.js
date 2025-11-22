import React from 'react'

function Hero() {
    return ( 
        <div className="container p-5">
            <div className='row text-center'>
                <img src='images/homeHero.png' alt='Hero' className='Hero-Image'/>
                <h1 className='mt-5'>
                    Invest in everything
                </h1>
                <p>Online plateform to invest in stocks, deravatives, mutual funds, and more </p>
                <br></br>
                <button style={{width:"15%", margin:"0 auto"}} type="button" className="btn btn-primary">Signup Now</button>
            </div>
            </div>

     );
}

export default Hero;