import {
  applyMiddleware,
  configureStore,
  compose,
  getDefaultMiddleware,
  createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit'
import DataSlice from './DataSlice'
import ValueSlice from './ValueSlice'
import thunkMiddleware from 'redux-thunk'
import { LoggedInSlice, setter, fetcher } from './LoggedInSlice'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

// const isSerializable = (value) => value.isIterable(value) || isPlain(value)

// const getEntries = (value) =>
//   value.isIterable(value) ? value.entries() : Object.entries(value)

// const serializableMiddleware = createSerializableStateInvariantMiddleware({
//   isSerializable,
//   getEntries,
// })
const persistedReducer = persistReducer(persistConfig, LoggedInSlice.reducer)

const composedEnhancer = compose(applyMiddleware(thunkMiddleware))

export const store = configureStore({
  reducer: {
    posts: DataSlice,
    counter: ValueSlice,
    loggedIn: persistedReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    //   }),
  },
})

export const persistor = persistStore(store)
