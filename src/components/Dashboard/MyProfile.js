import React,{useState,useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
const MyProfile = () => {
    const [profile,setProfile] =useState({})
    const [tool,setTool] =useState()
    const [user, loading, error] = useAuthState(auth);
    const uemail =user?.email
    const handleSubmit =event =>{
    event.preventDefault();
    const name =event.target.name.value;
    const location =event.target.location.value
    const email =event.target.email.value
    const phone =event.target.phone.value
    const linkedInprofile =event.target.linkedInprofile.value
    const profile ={
        name,
        location,
        email,
        phone,
        linkedInprofile,
      }
      console.log(profile)
  //     console.log(booking)
      fetch('https://pacific-scrubland-09811.herokuapp.com/profile', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(profile)
    })
        .then(res => res.json())
        .then(data => {
          
        //   setId(data)
          console.log(data.insertedId)

             const url =`https://pacific-scrubland-09811.herokuapp.com/profile/${data.insertedId}`;
         fetch(url,{
             method: "GET",
             headers: {
                authorization:`Bearer ${localStorage.getItem("accessToken")}`
             }
          })
        .then(res =>res.json())
        .then(data =>{
            
            setProfile(data)
        })
        });
       
    
    }
    // useEffect(() =>{
    //     const url =`https://pacific-scrubland-09811.herokuapp.com/profile/${id}`;
    //     fetch(url,{
    //         method: "GET",
    //         headers: {
    //             authorization:`Bearer ${localStorage.getItem("accessToken")}`
    //         }
    //     })
    //     .then(res =>res.json())
    //     .then(data =>{
    //         console.log("my",data)
           
    //     })
    // },[id])
            
    return (
        <div className='md:flex   items-center gap-20'>
           <div className="card w-96 bg-base-100 shadow-xl py-12 my-12">
               <h3>Add Profile</h3>
            <form onSubmit={handleSubmit} className='text-center flex flex-col items-center'>
  <input  name='name' type="text" placeholder='Name'   class="input mt-1 input-bordered w-full max-w-xs" />
    <input name='location' placeholder='Location' type="text"   class="input mt-1 input-bordered w-full max-w-xs" />
    <input name='email' type="email"  placeholder='Email'  class="input mt-1 input-bordered w-full max-w-xs" />
    <input name='phone'  type="text" placeholder="Phone" class="input mt-1 input-bordered w-full max-w-xs" />
  <input name='linkedInprofile'  type="text" placeholder="LinkedIn profile" class="input  input-bordered w-full max-w-xs" />
  <input for="my-modal-6" type="submit" className='btn block w-80 mx-auto text-black mx-4'  value="Submit" />
 
   </form>
           </div>
           <div className='mt-16'>
           <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body text-center">
      <h1 className='text-center text-2xl'>Your Profile</h1>
    <h2 class=" ">{profile.name}</h2>
    <h2>Location {profile.location}</h2>
    <h2>Email {profile.email}</h2>
    <h2>Phone {profile.phone}</h2>
    <h2>Linkedin {profile.linkedInprofile}</h2>
    
  </div>
</div>
               </div>
        </div>
    );
};

export default MyProfile;