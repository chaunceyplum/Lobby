import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const initialState = {
  posts: [],
  loading: false,
  error: null,
}

//const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
const apiUrl = 'https://classycutzbackend.herokuapp.com/posts'

export const fetchPosts = createAsyncThunk('fetchedRecipients/', async () => {
  try {
    const res = await axios.get(apiUrl)
    // const data = res.data
    // console.log(data)
    // initialState.posts.push(data)

    return [...res.data]
  } catch (err) {
    return err.message
  }
})

export const DataSlice = createSlice({
  name: 'posts',
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
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeded'
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const selectAllPosts = (state) => state.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error

export const { fetched } = DataSlice.actions
export default DataSlice.reducer
