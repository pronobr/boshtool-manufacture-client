import React from 'react';
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddProduct = () => {
  const notify = () => toast("Product Uploaded");
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageStorageKey='3865938eefff3a14cd02acc91c1d32e1';
    const onSubmit = data => {
        // console.log(data)
        const image = data.img[0];
        
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageStorageKey}`;
        fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(res=>res.json())
      .then(result =>{
        console.log(result)
        notify()
        if(result.success){
          const img = result.data.url;
          const product = {
              name: data.name,
              email:data.email,
              minimumOrderQuantity: data.minimunQuantity,
              availableQuantity: data.availableQuantity,
              img: img,
              description:data.description
          }
          console.log(product)
          fetch('https://pacific-scrubland-09811.herokuapp.com/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
        .then(res =>res.json())
        .then(data =>console.log(data))
        }
      })
         }
    return (
        <div className=''>
            <h2 className='text-3xl  my-8'>Add Product</h2>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Name</span>
      
    </label>
    <input {...register("name", {
      required:{
        value:true,
        message:"Error name"
      }
     
    })} type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
    <label className="label">
    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    
  </label>
  </div>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Email</span>
      
    </label>
    <input {...register("email", {
      required:{
        value:true,
        message:"Error email message"
      },
      pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    })} type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
    <label className="label">
    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  </label>
  </div>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Description</span>
      
    </label>
    <input className='' {...register("description", {
      required:{
        value:true,
        message:"error message"
      },
    })} type="text" placeholder="description" class="input py-[30px] input-bordered w-full max-w-xs" />
    <label className="label">
    {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

  </label>
  </div>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">price</span>
      
    </label>
    <input {...register("price", {
      required:{
        value:true,
        message:"Error  message"
      },
     
    })} type="number" placeholder="price" class="input input-bordered w-full max-w-xs" />
    <label className="label">
    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

  </label>
  </div>
  
  <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Available Quantity </span>
    
  </label>
  <input {...register("availableQuantity", {
    required:{
      value:true,
      message:" Error   message"
    }
  
  })} type="number" placeholder="Available Quantity" class="input input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}


  </label>
  </div>
  <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Minimum Quantity  </span>
    
  </label>
  <input {...register("minimunQuantity", {
    required:{
      value:true,
      message:" Error   message"
    }
  
  })} type="number" placeholder="Minimum Quantity" class="input input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.minimunQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimunQuantity.message}</span>}


  </label>
  </div>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">photo</span>
      
    </label>
    <input {...register("img", {
      required:{
        value:true,
        message:"Error name"
      }
     
    })} type="file" placeholder="photo" class="input input-bordered w-full max-w-xs" />
    <label className="label">
    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.file.message}</span>}
    
  </label>
  </div>
   <input className=' flex max-w-xs btn btn-outline' value={"Add Item"} type="submit" />
  </form>
            </div>
        </div>
    );
};

export default AddProduct;