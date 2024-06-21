import { configureStore } from "@reduxjs/toolkit";
import buycartSlice from "./buycart";
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer:{
        cart: buycartSlice
    },
    
 })