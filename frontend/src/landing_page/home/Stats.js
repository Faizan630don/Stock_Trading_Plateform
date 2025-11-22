import React from 'react'

function Stats() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h1>Trust with confidence</h1>
                    &nbsp;
                    &nbsp;
                    <h3 >Customer-first always</h3>
                    <p className='text-muted'>Thast's why 13 crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity invesments. </p>
                    &nbsp;
                    <h3>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notification. High quality apps that you use at your pace, the way you like.</p>
                    &nbsp;
                    <h3>The Zerodha Universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our invesments in 30+ fintech startup offer you tailored services specific to your needs.</p>
                    &nbsp;
                    <h3>Do better with money</h3>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money </p>
                    
                </div>
                <div className='col-6 p-5'>
                    <img src='images/ecosystem.png' style={{width:"90%"}} />

                <div className='text-center p-5 pr-5'>
                <a href='' className='mx-5 ' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
                <a href='' style={{textDecoration:"none"}} >Try Kite
                <i class="fa fa-arrow-right" aria-hidden="true"></i>

                </a>
                </div>
                </div>
                    
            </div>
        </div>
     );
}

export default Stats;