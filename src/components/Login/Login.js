import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../src/Firebase/Firebase.init"
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useToken from '../hooks/useToken';

const Login = () => {
  const notify = () => toast("You are logged inn");
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const [
      signInWithEmailAndPassword,
      user1,
      loading1,
      error1,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate =useNavigate()
  const location =useLocation()
  const [token] = useToken(user || user1)
  if(token){
    console.log(user)
    notify()
    // navigate(from, { replace: true });
    navigate('/')
  }
  
  let from = location.state?.from?.pathname || "/";
  let signInError;
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async data => {
    console.log(data.email)
        await signInWithEmailAndPassword(data.email, data.password);
         await updateProfile({ displayName:data.name});
     }
     if(error || error1 || error2){
        signInError= <p> {error?.message} || {error1?.message}</p>
      }
    return (
        <div className='flex justify-center items-center mt-16 h-100'>
        <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class=" text-center font-bold text-2xl">Login</h2>
  
  
  <form onSubmit={handleSubmit(onSubmit)}>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Email</span>
      
    </label>
    <input {...register("email", {
      required:{
        value:true,
        message:"error message"
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
    <span class="label-text">Password</span>
    
  </label>
  <input {...register("password", {
    required:{
      value:true,
      message:" password error message"
    },
    minLength: {
      value: 6,
      message: 'Must be 6 characters or longer'
  }
  })} type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  </label>
  </div>
  {signInError}
   <input className='w-full max-w-xs btn btn-outline' type="submit" />
  </form>
  
  
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true })} />
        {errors.firstName?.type === 'required' && "First name is required"}
        
        <input {...register("lastName", { required: true })} />
        {errors.lastName && "Last name is required"}
        
        <input type="submit" />
      </form> */}
      <p>New To here <Link to="/signup">Create New Aecount</Link></p>
    <div class="divider">OR</div>
    <button class="btn btn-outline" onClick={() => signInWithGoogle()}>Continue with Google</button>
  
  </div>
    </div>
  </div>
    );
};

export default Login;