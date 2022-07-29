import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosClient from '../../api/axiosClient';


const initialState = {
  email: '',
  password: ''
}
export interface IUser {
  email: '' ,
  password: ''
}


export const AuthSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {

  }
})

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (payload: IUser ) => {
    const response = await axiosClient.post('auth/login')
    console.log(response)
  }

)

export default AuthSlice.reducer