import React from 'react'

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}
   
) {
    return ( 
        
        <div className='container '>
            <div className='row mt-5 p-5 '>
               
                <div className='col-5 p-3'>
                    <img src={imageURL}/>

                </div>
                <div className='col-2'></div>
                <div className='col-5'>
                    <h3 className='mt-5  text-start'>{productName}</h3>
                    <p className=' text-start'>{productDescription}</p>
                    <a href={tryDemo} style={{textDecoration:"none"}} >Try Demo →</a>
                    <a href={learnMore} style={{textDecoration:"none", marginLeft:"60px"}}>Learn More →</a>
                    <br></br>
                    <br></br>
                    <a href={googlePlay}><img src='images/googlePlayBadge.svg'/></a>
                    <a href={appStore} style={{marginLeft:"60px"}}><img src='images/appstoreBadge.svg'/></a>

                </div>
                
            </div>
        </div>
       
     );
}

export default LeftSection;