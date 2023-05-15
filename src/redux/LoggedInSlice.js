import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const initialState = {
  LoggedIn: false,
  loading: false,
  error: null,
  email: '',
  name: '',
  auth: '',
  message: '',
}

const apiUrl = 'https://classycutzbackend.herokuapp.com'

export const fetchSignUp = createAsyncThunk('fetchedSignUp/', async (state) => {
  try {
    const res = await axios.post(`${apiUrl}/user`, {
      password: 'blah',
      email: 'chaunceypss@gmail.com',
    })

    console.log(res)
    return res
  } catch (err) {
    return err.message
  }
})

export const LoggedInSlice = createSlice({
  name: 'loggedIn',
  initialState: initialState,
  reducers: {
    fetcher: {
      reducer(state, action) {
        state.LoggedIn = true
        state.email = action.payload.user.email
        state.password = action.payload.user.password
        state.user = action.payload.user

        state.email && state.password
          ? setter(state, action, state.user)
          : (state.LoggedIn = false)

        setter(state, action, state.user)
      },
    },
    setter: (state, action, data) => {
      return action.payload
    },
    setLogin: (state) => {
      state.LoggedIn = true
      return state.LoggedIn
    },

    emailGetter: (state, action) => {
      //state.email = action.payload.email
      return state.email
    },
    nameGetter: (state, action) => {
      return state.name
    },
    signOut: (state, action) => {
      console.log(`Logged out user:     ${JSON.stringify(state.username)}`)
      return initialState
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSignUp.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchSignUp.fulfilled, (state, action) => {
        state.status = 'succeded'
        state.LoggedIn = true
      })
      .addCase(fetchSignUp.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const loggedInBool = (state) => state.LoggedIn
export const loggedInLoading = (state) => state.loading
export const loggedInError = (state) => state.error
export const loggedInEmail = (state) => state.email
export const loggedInPassword = (state) => state.password

export const { nameGetter } = LoggedInSlice.actions
export const { emailGetter } = LoggedInSlice.actions
export const { fetcher } = LoggedInSlice.actions
export const { setter } = LoggedInSlice.actions
export const { signOut } = LoggedInSlice.actions
export default LoggedInSlice.reducer
