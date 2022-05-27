import React from 'react';
import images from "../../../images/images.jpg"
const Freature = () => {
    return (
        <div className='px-8 my-16 mb-5 w-[98%] h-100 mx-auto'>
            <div className="md:flex ">
                <div className="">
                    <img className='w-[1400px]' src={images} alt="" />
                </div>
                <div className="md:flex  items-center   items-center">
                    <div className="text-left ml-8  ">
                    <h2 className='text-primary mb-5 text-3xl fw-bold'>We Can Take Your Business To The Next Level.</h2>
                    <p className='mr-32'>The MicroTech sells items of essential use Laptops, and so on.The Warehouse's 
                        stores are colloquially known both within the organisation and within New Zealand as "Red Sheds".
                        our company stablised in 2010 and we are growing day by day.Get great deals every day at The MicroTech. we have massive range of products
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Freature;