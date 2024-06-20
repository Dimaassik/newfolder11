import { configureStore } from "@reduxjs/toolkit";
import buycartSlice from "./buycart";

export const store = configureStore({
    reducer:{
        cart: buycartSlice
    }
 })