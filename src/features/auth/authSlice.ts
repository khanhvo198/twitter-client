import { createSlice } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import { User } from '../../models/User';
import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
export interface AuthState {
  status: string;
  user?: User;
}

const initialState: AuthState = {
  status: '',
  user: undefined,
};

export interface LoginPayload {
  email: string;
  password: string;
  navigate: NavigateFunction;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state: any, action: PayloadAction<LoginPayload>) { },
    setUserStatus(state: any, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setUserData(state: any, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    signOut(state: any) { 
      state = {
        ...state,
        status: '',
        user: undefined
      }
      localStorage.removeItem('token')
    },
  },
});

export const { signIn, signOut, setUserStatus, setUserData } =
  authSlice.actions;

export default authSlice.reducer;
