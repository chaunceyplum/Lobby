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
//const apiUrl = 'http://localhost:3007/posts'
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
      // reducer(state, action) {
      //   state.posts.push(action.payload)
      // },
      reducer(state, action) {
        state.posts = action.payload.posts.posts
        return state.posts
      },
    },
    validatePost: (state, action) => {
      state.message = action.payload.user.message
      return state.message
    },
    submitLike: (state, action) => {
      // if (state.likedBy.includes(state.username)) {
      //   for (let i = 0; i < state.likedBy.length; i++) {
      //     if (i == state.username) {
      //       const index = state.likedBy.indexOf(state.username)
      //       state.likedBy.splice(index, 1)
      //       return state.likedBy
      //     }
      //   }
      // } else {
      //state.posts = action.payload.likedBy.push(state.username)

      const newState = state

      newState.posts.push(state.username)

      return newState
      //}
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
export const { validatePost } = DataSlice.actions
export const { submitLike } = DataSlice.actions
export const { fetched } = DataSlice.actions
export default DataSlice.reducer
