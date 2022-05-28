import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const ManageProducts = () => {
    const [product,setProduct] =useState([])
    useEffect(() =>{
        fetch('https://pacific-scrubland-09811.herokuapp.com/tools')
        .then(res =>res.json())
        .then(data =>setProduct(data))
    },[])
    return (
        <div class="overflow-x-auto">
      <table class="table md:w-full sm:table-normal">
      
        <thead>
          <tr>
            <th>Tool Name</th>
            <th>Tool Price</th>
            <th>Available Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
         
          {
              product.map(items =><SingleProduct setProduct ={setProduct} product ={product} items ={items}></SingleProduct>)
          }
        </tbody>
      </table>
      </div>  
    );
};

export default ManageProducts;