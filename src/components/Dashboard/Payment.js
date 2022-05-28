import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../Loading/Loading';
const stripePromise = loadStripe('pk_test_51HVdTWBLa4QtAMbzJF8fESJt8K44YI2RpHvgDeomDGPXujOgO65ZODQda0qJjd7KiMCyuKPq1NpAfrpXYhaw5VTG00f5DSaCaY');
const Payment = () => {
    const {id} =useParams()
    const url =`https://pacific-scrubland-09811.herokuapp.com/booking/${id}`
    // const [user,setUser] =useState({})
    const { data: user, isLoading } = useQuery(['booking', id], () => fetch(url, {
      method: 'GET',
      // headers: {
      //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      // }
  }).then(res => res.json()));

  if (isLoading) {
      return <Loading></Loading>
  }
    // useEffect(() =>{
    //     fetch(`https://pacific-scrubland-09811.herokuapp.com/booking/${id}`)
    //     .then(res =>res.json())
    //     .then(data =>setUser(data))
    // },[id])
    return (
        <div>
            <h2 className='text-3xl text-left my-8 text-success-500'>Please Pay for {id}</h2>
            <div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
      <p className='text-success'>Hello {user.name}</p>
    <h2 class="card-title">{user.productName}</h2>
    <p>Please Pay ${user.price}</p>
    <div>
    <Elements stripe={stripePromise}>
    <CheckoutForm user ={user}/>
  </Elements>
    </div>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Payment;