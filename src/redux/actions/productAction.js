import axios from "axios"
import fakeStoreApi from "../../apis/fakeStoreApi"

import { ActionTypes } from "../constants/action-types"
export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectedProduct=(product)=>async (dispatch)=>{
    const {data}=await fakeStoreApi.get(`/products/${product}`)
    dispatch ({
        type:ActionTypes.SELECTED_PRODUCT,
        payload:data
    })
}
export const removeSelectedProduct=()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}
export const fetchProducts= ()=>async (dispatch)=>{
        const {data}=await fakeStoreApi.get("/products")
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:data})
    }
    
   

