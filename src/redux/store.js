import { applyMiddleware, configureStore, compose } from '@reduxjs/toolkit'
import DataSlice from './DataSlice'
import ValueSlice from './ValueSlice'
import thunkMiddleware from 'redux-thunk'
import { LoggedInSlice, setter, fetcher } from './LoggedInSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, LoggedInSlice.reducer)

const composedEnhancer = compose(applyMiddleware(thunkMiddleware))

export const store = configureStore({
  reducer: {
    posts: DataSlice,
    counter: ValueSlice,
    loggedIn: persistedReducer,
  },
})

export const persistor = persistStore(store)
