import React,{useState,useEffect} from 'react';

const useTool = () => {
    const [products,setProducts] =useState([])
    useEffect(() =>{
        fetch("http://localhost:5000/tools")
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])
    return [products,setProducts]
};

export default useTool;