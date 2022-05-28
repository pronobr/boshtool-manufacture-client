import React,{useState,useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import OrderItems from './OrderItems';
import { signOut } from 'firebase/auth';
const MyOrders = () => {
    const [myOrder,setMyOrder] =useState([])
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`https://pacific-scrubland-09811.herokuapp.com/booking?email=${user.email}`,{
              method: 'GET',
              headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
            .then(res => {
              console.log('res', res);
              if (res.status === 401 || res.status === 403) {
                  signOut(auth);
                  localStorage.removeItem('accessToken');
                  navigate('/');
              }
              return res.json()
          })
                .then(data => setMyOrder(data));
        }
    }, [user])
    // if(loading)
    return (
      <div class="overflow-x-auto">
      <table class="table md:w-full sm:table-normal">
      
        <thead>
          <tr>
            <th>Email</th>
            <th>Tool Name</th>
            <th>Price</th>
            <th>Payment</th>
            <th>Cancle</th>
            <th>Transaction Id</th>
          </tr>
        </thead>
        <tbody>
         
          {
              myOrder.map(items =><OrderItems  setMyOrder ={setMyOrder} myOrder ={myOrder} items ={items}></OrderItems>)
          }
        </tbody>
      </table>
      </div>  
        
    );
};

export default MyOrders;




