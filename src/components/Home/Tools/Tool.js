import React from 'react';
import { useNavigate } from 'react-router-dom';
const Tool = ({items}) => {
    const navigate =useNavigate()
    const nagivateToDetail = id=>{
      console.log(id)
      navigate(`/tool/${id}`)
    }
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl mx-12">
  <figure><img src={items.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title ml-20">{items.name}</h2>
    <p className='text-xl'>{items.description}</p>
    <p className='text-lg'>Minimum Order Quantity  <span>{items.minimumOrderQuantity}</span></p>
    <p className='text-lg'>Available Quantity  <span>{items.availableQuantity}</span></p>
    <div class="card-actions justify-end">
      <button onClick={()=>nagivateToDetail(items._id)} class="btn btn-primary">Purchase</button>
    </div>
  </div>
</div>
    );
};

export default Tool;