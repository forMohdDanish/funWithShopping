import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from "axios";
import { fetchProducts, setProducts } from '../redux/actions/productAction';

function ProductListing() {
    const products=useSelector(state=>state);
    const dispatch=useDispatch();
    // const fetchProducts=async()=>{
    //     const {data}=await axios.get('https://fakestoreapi.com/products').catch(err=>console.log("err",err))
    //     console.log(data);
    //     dispatch(setProducts(data))
    // }
    useEffect(() => {
        dispatch(fetchProducts())
      
    }, []);
    console.log(products, "hey");
    
  return (
    
    <div className="ui grid container">
       <ProductComponent/>
    </div>
  )
}

export default ProductListing