import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';

 export const reducer=combineReducers({
    allproducts:productReducer,
    product:selectedProductReducer
})