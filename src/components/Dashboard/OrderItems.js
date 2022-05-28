import React from 'react';
import { Link } from 'react-router-dom';

const OrderItems = ({items,setMyOrder,myOrder}) => {
  console.log(myOrder.length)
    console.log(items)
    const handleDelete =(email) =>{
      const proceed =window.confirm("Are you Sure To Delete")
      if(proceed){
        fetch(`https://pacific-scrubland-09811.herokuapp.com/delete/${email}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remaining = myOrder.filter(products =>products.email !==email)
            setMyOrder(remaining)

           
        })
    }
    }
    return (
        <tr>
        <th>{items.email}</th>
        <td>{items.productName}</td>
        <td>{items.price}</td>
        

        {
          (items.price && !items.paid) ?<td>{(items.price && !items.paid) && <Link to ={`/dashboard/payment/${items._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}</td>:<td>{(items.price && items.paid) && <button className='btn btn-xs btn-success'>paid</button>}</td> 
        }
        {/* <td>{(items.price && !items.paid) && <Link to ={`/dashboard/payment/${items._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}</td>
        <td>{(items.price && items.paid) && <button className='btn btn-xs btn-success'>pay</button>}</td> */}
        {/* <td>{(items.price && items.paid) &&   <Link to ={""}><button className='btn btn-xs btn-success'>Paid</button></Link>}</td> */}
        <td>{!items.paid ?<button onClick={() =>handleDelete(items.email)}  className='btn btn-xs btn-success'>cancle</button>:""}</td>
        <td>{items.transactionId}</td>
      </tr>
    );
};

export default OrderItems;