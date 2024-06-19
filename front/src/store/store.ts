import { configureStore } from "@reduxjs/toolkit";
import buycartSlice from "./buycart.slice";

export const store = configureStore({
    reducer:{
        cart: buycartSlice
    }
 })