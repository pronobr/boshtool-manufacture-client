import React from 'react';
import { AiFillFlag } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { CgFeed } from "react-icons/cg";
const BusinessSummary = () => {
    return (
        <div className='my-12'>
            <h1 className="text-blue-600 font-bold  text-5xl">Our Business Samary</h1>
            <div className='grid  md:grid-cols-4 gap-4 sm:grid-cols-1 my-24'>
                <div className='flex flex-col items-center justify-center align'>
                <AiFillFlag className='text-5xl mb-6  text-blue-600'></AiFillFlag>
                <h2>72</h2>
                <h3>Countries</h3>
                </div>
                <div className='flex flex-col items-center justify-center align'>
                <AiFillProject className='text-5xl mb-6 text-blue-600'></AiFillProject>
                <h2>400</h2>
                <h3>Complete Projects</h3>
                </div>
                <div className='flex flex-col items-center justify-center align'>
                <BsPeopleFill className='text-5xl mb-6 text-blue-600'></BsPeopleFill>
                <h2>600</h2>
                <h3>Happy Client</h3>
                </div>
                <div className='flex flex-col items-center justify-center align'>
                <CgFeed className='text-5xl text-blue-600 mb-6'></CgFeed>
                <h2>400</h2>
                <h3>Feedback</h3>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;