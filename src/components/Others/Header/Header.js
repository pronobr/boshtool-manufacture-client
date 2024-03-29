import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeitem("accessToken")
        Navigate("/")
      };
    return (
<div className='mx-16'>
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
<li><Link to="/">Home</Link></li>
<li>{user?<button onClick={logout} class="btn btn-active btn-ghost">Signout</button>:<Link to="/login">Login</Link>}</li>
            <li><Link to="/register">Register</Link></li>
            {user? <li><Link to="/dashboard">Dashboard</Link></li>:""}
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/myportfolio">Portfolio</Link></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">Boshtrools</a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
     
<li><Link to="/">Home</Link></li>
<li>{user?<button onClick={logout} class="btn btn-active btn-ghost">Signout</button>:<Link to="/login">Login</Link>}</li>
      <li><Link to="/register">Register</Link></li>
      {user? <li><Link to="/dashboard">Dashboard</Link></li>:""}
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/myportfolio">Portfolio</Link></li>
    </ul>
  </div>
  <div className= " ml-6 navbar-end">
  <label for="my-drawer-2" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  <label for="my-drawer-2" class="btn btn-primary drawer-button sm:hidden">Open drawer</label>
  </div>
</div>
</div>
    );
};

export default Header;


{/* <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li> */}