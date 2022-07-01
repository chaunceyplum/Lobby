import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';


export const ValueSlice = createSlice({
    
    name:'counter',
    initialState: {
        value: 0
    },
    reducers:{
        increment: (state) => {
            state.value += 1;
            console.log( state.value)
        },
        decrement:(state) => {
            state.value -= 1;
            console.log( 'Decremented by one')
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
}
)
export const { increment, decrement, incrementByAmount } = ValueSlice.actions;
export default ValueSlice.reducer;