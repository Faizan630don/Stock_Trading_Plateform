import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            
            {/* Row for Heading and Button (unchanged) */}
            <div className='row mt-2 d-flex justify-content-between align-items-center '>
                
                <div className='col-auto p-5'> 
                    <h1 className='text-start text-muted'>Support Portal</h1>
                </div>
                
                <div className='col-auto p-5'> 
                    <button type="button" className="btn btn-primary">My tickets</button>
                </div>
            </div>

            {/* Row for Search Bar - Corrected Structure */}
            <div className='row'>
                {/* Use col-12 for full width, and remove the custom marginLeft */}
                <div className='col-12 px-5 pb-5'>
                    
                    {/* START of Input Group structure */}
                    <div className='input-group input-group-lg'>
                        
                        {/* 1. Icon (Prepended) */}
                        <span 
                            className="input-group-text bg-white border-end-0" 
                            id="basic-addon1"
                        >
                            {/* Assumes Font Awesome or Bootstrap Icons are linked */}
                            <i className="fa fa-search" aria-hidden="true" style={{ color: '#6c757d' }}></i>
                        </span>

                        {/* 2. Input Field */}
                        <input 
                            type='text' 
                            className='form-control border-start-0' 
                            placeholder='Eg: How do I open an account, How do I activate F&O'
                            aria-label="Search query"
                        />
                    </div>
                    {/* END of Input Group structure */}

                </div>
            </div>
            {/* Added a placeholder for the next component below the search bar */}
            
        </div>
     );
}

export default Hero;