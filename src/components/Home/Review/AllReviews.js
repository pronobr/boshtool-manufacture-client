import React from 'react';

const AllReviews = ({items}) => {
    console.log(items)
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center pl-28 card-title">{items.comment}</h2>
    <p>Rating {items.rating}</p>
  </div>
</div>
    );
};

export default AllReviews;