import { configureStore } from "@reduxjs/toolkit";
import  DataSlice  from "./DataSlice";
import  ValueSlice  from "./ValueSlice";

export const store = configureStore({
    reducer:{
        data:DataSlice,
        value:ValueSlice
    }
})