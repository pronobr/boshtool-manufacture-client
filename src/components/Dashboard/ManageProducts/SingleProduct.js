import React from 'react';

const SingleProduct = ({items,product,setProduct}) => {
    console.log(product.length)
        const handleDelete = (id) => {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = product.filter(products =>products._id !==id)
                    setProduct(remaining)

                   
                })
            }
    return (
        <tr>
        
        <td>{items.name}</td>
        <td>{items.price}</td>
        <td>{items.availableQuantity}</td>
        <td><button onClick={() =>handleDelete(items._id)} class="btn btn-warning">Delete</button></td>
       </tr>
    );
};

export default SingleProduct;



