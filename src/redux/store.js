import { applyMiddleware, configureStore, compose } from "@reduxjs/toolkit";
import   DataSlice   from "./DataSlice";
import  ValueSlice  from "./ValueSlice";
import thunkMiddleware from 'redux-thunk'



const composedEnhancer = compose(applyMiddleware(thunkMiddleware))

export const store = configureStore({
    reducer:{
        posts:DataSlice,
        counter:ValueSlice
    }
})