import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const initialState = {
  LoggedIn: false,
  loading: false,
  error: null,
}

const apiUrl = 'https://classycutzbackend.herokuapp.com/user'

export const fetchUser = createAsyncThunk('fetchedRecipients/', async () => {
  try {
    //must be changed to post
    //must be changed to post
    //must be changed to post
    //must be changed to post
    //must be changed to post
    //must be changed to post
    const res = await axios.get(apiUrl)
    // const data = res.data
    // console.log(data)
    // initialState.posts.push(data)

    return [...res.data]
  } catch (err) {
    return err.message
  }
})

export const LoggedInSlice = createSlice({
  name: 'LoggedIn',
  initialState: initialState,
  reducers: {
    fetched: {
      reducer(state, action) {
        state.posts.push(action.payload)
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeded'
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})
