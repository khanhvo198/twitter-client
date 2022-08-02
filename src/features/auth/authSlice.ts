import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosClient from '../../api/axiosClient';
import { User } from '../../models/User';
import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';

export interface AuthState {
  status: string,
  user?: User,
}

const initialState: AuthState =  {
  status: '',
  user: undefined,
}


export interface LoginPayload {
  email: string,
  password: string
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state: any , action: PayloadAction<LoginPayload>) {
      state.status = 'LOADING'
    },
    setUserStatus(state: any, action: PayloadAction<string>) {
      state.status = action.payload
    },
    signOut(state: any) {
      state.status = 'LOGOUT'
    }
  }
})

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (payload: LoginPayload ) => {
    try {
      const response = await axiosClient.post('/auth/login', payload)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    
  }

)

export default AuthSlice.reducer