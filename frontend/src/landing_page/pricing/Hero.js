import React from 'react'
function Hero() {
    return ( 
        <div className='container '>
        <div className='row mt-4 p-5  '>
            <h2 className=' text-center'>Charges</h2>
            <p className='text-center text-muted p-2 fs-5'>List of all charges and taxes</p>
            </div>
            <div className='row p-5 mt-5'>
                <div className='col-4 p-5'>
                    <img src='/images/pricingEquity.svg'/>
                    <h2 className='text-center '>
                    Free equity delivery
                    </h2>
                    <p className='text-center text-muted p-1 '>
                    All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className='col-4 p-5'>

                <img src='/images/intradayTrades.svg'/>
                    <h2 className='text-center '>
                    Intraday and F&O trades
                    </h2>
                    <p className='text-center text-muted p-1 '>
                    Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className='col-4 p-5'>

                <img src='/images/pricingEquity.svg'/> 
                    <h2 className='text-center '>
                    Free direct MF
                    </h2>
                    <p className='text-center text-muted p-1 '>
                    All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
            </div>
     );
}

export default Hero;