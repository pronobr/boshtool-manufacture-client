import React,{useState,useEffect} from 'react';

const useTool = () => {
    const [products,setProducts] =useState([])
    useEffect(() =>{
        fetch("https://pacific-scrubland-09811.herokuapp.com/tools")
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])
    return [products,setProducts]
};

export default useTool;