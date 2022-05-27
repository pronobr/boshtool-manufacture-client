import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from "../hooks/useAdmin";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] =useAdmin()
  console.log(admin)
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col ">
  <Outlet />
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    <li><Link to="/dashboard">My Orders</Link></li>
    <li><Link to="/dashboard/review">My Reviews</Link></li>
    <li><Link to="/dashboard/profile">My Profile</Link></li>
    <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
    <li><Link to="/dashboard/addproduct">Add Product</Link></li>
    <li><Link to="/dashboard/manageproduct">Manage Products</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;