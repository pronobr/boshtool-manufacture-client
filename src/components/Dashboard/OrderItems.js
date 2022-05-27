import React from 'react';
import { Link } from 'react-router-dom';

const OrderItems = ({items}) => {
    console.log(items)
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
        <td>{!items.paid ?<button  className='btn btn-xs btn-success'>cancle</button>:""}</td>
      </tr>
    );
};

export default OrderItems;