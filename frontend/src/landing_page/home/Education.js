import React from 'react'

function Education() {
    return ( 
       <div className='container mt-5 p-5'>
        <div className='row'>
            <div className='col-6  p-5'>
                <img src='images/education.svg'/>
            </div>
            <div className='col-6  p-10 '>
                <h1>Free and open market education</h1>

                &nbsp;
                <p className='text-muted mt-5'>
                    Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                </p>
                <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                
                <br></br>
                <p className='text-muted mt-5'>
                    TradingQ&A, the most active trading and investment community in India for all your market related queries.
                </p>
                <a href='' style={{textDecoration:"none"}}> TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
       </div>
     );
}

export default Education;