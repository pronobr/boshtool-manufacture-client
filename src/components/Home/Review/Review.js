import React, { useEffect, useState } from 'react';
import AllReviews from './AllReviews';

const Review = () => {
    const [review,setReview] =useState([])
    useEffect(() =>{
        fetch("https://pacific-scrubland-09811.herokuapp.com/review")
        .then(res =>res.json())
        .then(data =>setReview(data))
    },[])
    return (
        <div className='my-8 mx-16'>
            <h2 className='text-center text-2xl font-bold my-16 text-green-600'>All Reviews</h2>
            <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-1 mb-12 '>
            {
                review.map(items =><AllReviews items={items}></AllReviews>)
            }
            </div>
        </div>
    );
};

export default Review;