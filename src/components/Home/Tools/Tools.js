import React,{useEffect, useState} from 'react';
import Footer from '../../Others/Footer/Footer';
import Tool from './Tool';

const Tools = () => {
    const [tool,setTools] =useState([])
    useEffect(() =>{
        fetch("https://pacific-scrubland-09811.herokuapp.com/tools")
        .then(res =>res.json())
        .then(data =>setTools(data))
    },[])
    
    return (
        <div>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 mb-12 gap-4'>
            {
               tool.map(items =><Tool items={items}></Tool>)
            }

            
        </div>
        
        </div>
        
    );
};

export default Tools;