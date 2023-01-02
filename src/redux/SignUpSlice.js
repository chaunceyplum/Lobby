import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  LoggedIn: false,
  loading: false,
  error: null,
  email: '',
  password: '',
}

const apiUrl = 'https://classycutzbackend.herokuapp.com/signup'
