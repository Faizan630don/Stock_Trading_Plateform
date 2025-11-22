import React from 'react'

function Rightsection(
    {
        imageURL,
        productName,
        productDescription,
        tryDemo,
        learnMore,
        
    }
) {
    return ( 
        <div className='container mt-3'>
        {/* ADDED 'align-items-center' to vertically center the columns */}
        <div className='row p-5 align-items-center'>
           
            {/* TEXT COLUMN (col-5) */} 
            {/* Removed the unnecessary 'mt-3' on the column itself */}
            <div className='col-5 p-3'>
                {/* Removed 'mt-3' on the heading to allow better centering */}
                <h3 className='text-start'>{productName}</h3>
                <p className='text-start'>{productDescription}</p>
                <a href={tryDemo} style={{textDecoration:"none"}} >Kite Connect API →</a>
                <a href={learnMore} style={{textDecoration:"none", marginLeft:"60px"}}>Learn More →</a>
                <br></br>
                <br></br>
            </div>
            
            {/* SPACER COLUMN (col-1) */}
            <div className='col-1'></div>
            
            {/* IMAGE COLUMN (col-6) */}
            <div className='col-6'>
                {/* Use className="img-fluid" to ensure the image scales responsively */}
                <img src={imageURL} alt={productName} className="img-fluid"/>
            </div>
        </div>
    
    </div>
    
   
     );
}

export default Rightsection;