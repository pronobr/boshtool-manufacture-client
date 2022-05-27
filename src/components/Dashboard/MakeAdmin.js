import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import AllUsers from './AllUsers';
const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Make Admin</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map(items =><AllUsers items ={items}></AllUsers>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MakeAdmin;