import React from 'react';

const AllUsers = ({items}) => {
    const handleAdmin =() =>{
        fetch(`http://localhost:5000/user/admin/${items.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data =>console.log(data))

           
    }
    return (
        <tr>
        <th>{items.name}</th>
        <td>{items.email}</td>
        <td><button onClick ={handleAdmin} className='btn btn-xs'>Make Admin</button></td>
        
      </tr>
    );
};

export default AllUsers;