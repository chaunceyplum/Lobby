import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { useDispatch } from "react-redux";

const initialState = {
    recipients:[],
    status:'idle', //'idle'| 'loading'
    error:null
    

} 

    const apiUrl = "https://dummyapi.io/data/v1/user?limit=10"

    export const fetchPosts = createAsyncThunk('fetchedRecipients/', async () => {
        try{
            const response = await axios.get(apiUrl)
            return [...response.data];
        } catch(err){
            return err.message;
        }
        
      })




    export const DataSlice = createSlice({
        name:'Data',
        initialState:initialState,
        reducers:{
            fetched:{
                reducer(state, action) {
                    state.recipients.push(action.payload)
                },
            }
        }

    
    })



    export const {fetched} = DataSlice.actions