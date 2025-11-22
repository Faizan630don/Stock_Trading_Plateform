import React from 'react'
function Hero() {
    return ( 
        <div className='container'>
            <div className='row mt-5 p-5 '>
                <h2 className='text-muted text-center'>Zerodha Products</h2>
                <p className='fs-4 text-center text-muted '>Sleek, modern, and intuitive trading platforms</p>
                <p className='fs-4 text-center text-muted ' >Check out our <a href='' style={{textDecoration:"none"}}>investment offerings →</a></p>
            </div>
            <div  className='border-top'></div>
        </div>
     );
}

export default Hero;