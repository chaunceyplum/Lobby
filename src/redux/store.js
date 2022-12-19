import { applyMiddleware, configureStore, compose } from '@reduxjs/toolkit'
import DataSlice from './DataSlice'
import ValueSlice from './ValueSlice'
import thunkMiddleware from 'redux-thunk'
import { LoggedInSlice } from './LoggedInSlice'

const composedEnhancer = compose(applyMiddleware(thunkMiddleware))

export const store = configureStore({
  reducer: {
    posts: DataSlice,
    counter: ValueSlice,
    loggedIn: LoggedInSlice,
  },
})
