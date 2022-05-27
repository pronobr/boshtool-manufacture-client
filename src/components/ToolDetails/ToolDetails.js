import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import useTool from '../useTool/useTool';
const ToolDetails = () => {
    const {toolId}  =useParams()
    const [user, loading, error] = useAuthState(auth);
    const [tool,setTool] =useState({})
    useEffect(()=>{
        const url =`http://localhost:5000/tool/${toolId}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>{
            setTool(data)
          console.log(data)
        })
    },[toolId])
    const handleSubmit =event =>{
        event.preventDefault();
        const productName =event.target.productName.value
        const price =event.target.price.value
        const availableQuantity =event.target.availableQuantity.value
        const quantity =event.target.quantity.value
        const name =event.target.name.value
        const email =event.target.email.value
        const phone =event.target.phone.value
        const booking ={
            productName,
            price,
            quantity,
            name,
            email,
          }
          console.log(booking)
          fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
              console.log(data)
                if(data.success){
                   console.log(data.success)
                }
                else{
                    console.log("alreasy created")
                }
                // refetch();
            });
       
        
        }
    return (
        <div className='mt-8'>
<div className='mb-8 flex items-center mx-auto w-96'>
<div class="card card-compact w-100 bg-base-100 shadow-xl mx-12">
  <figure><img src={tool.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title ml-20">{tool.name}</h2>
    <p className='text-lg'>{tool.description}</p>
    <p className='text-lg'>Minimum Order Quantity  <span>{tool.minimumOrderQuantity}</span></p>
    <p className='text-lg'>Available Quantity  <span>{tool.availableQuantity}</span></p>
  </div>
</div> 
</div>
<div className =''>
    <h2 className='text-center text-2xl'>Book Product</h2>
     <form onSubmit={handleSubmit} className='text-center flex flex-col items-center'>
   <input  name='productName' type="text" value={tool.name}  class="input mt-1 input-bordered w-full max-w-xs" />
   <input name='price' type="text" value={tool.price}  class="input mt-1 input-bordered w-full max-w-xs" />
   <input name='quantity' type="text"  placeholder='Add Quantity'  class="input mt-1 input-bordered w-full max-w-xs" />
   <input name='name' value={user?.displayName} type="text" placeholder="Name" class="input mt-1 input-bordered w-full max-w-xs" />
   <input name='email' value={user?.email} type="text" placeholder="Email" class="input  input-bordered w-full max-w-xs" />
   <input for="my-modal-6" type="submit" className='btn block w-80 mx-auto text-black mx-4'  value="Submit" />
 
   </form>
        </div>
        </div>
       
    );
};

export default ToolDetails;