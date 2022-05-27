import React from 'react';
import error from "../../images/error.png"
const NotFound = () => {
    return (
        <div className='error-container'>
        <img className='errorImg mx-auto' src={error} alt="" />
    </div>
    );
};

export default NotFound;