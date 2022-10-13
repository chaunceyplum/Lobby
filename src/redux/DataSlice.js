import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { useDispatch } from "react-redux";

const initialState = {
    recipients:[],
    loading:false,
    error:null
    

} 

    const apiUrl = "https://dummyapi.io/data/v1/user?limit=10"

    export const fetchUsers = createAsyncThunk('fetchedRecipients/', async (apiUrl) => {
        const res = await fetch(apiUrl)
        .then((data) => data.json());
        return res;
      })




    export const DataSlice = createSlice({
        name:'data',
        initialState:initialState,
        reducers:{
            fetched:{
                reducer(state, action) {
                    state.recipients.push(action.payload)
                },
            }
        }
        // extraReducers(builder){
        //     builder
        //         .addCase()
        // }

    
    })



    export const { fetched } = DataSlice.actions
    export default DataSlice.reducer;