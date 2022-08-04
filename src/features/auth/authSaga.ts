import { PayloadAction } from '@reduxjs/toolkit/src/createAction';
import { call, put, takeLatest } from 'redux-saga/effects';
import { authAPI } from '../../api/authApi';
import { User } from '../../models/User';
import { LoginPayload, setUserData, setUserStatus, signIn } from './authSlice';

export interface Response<T> {
  data: T;
  message: string;
  reason: string;
  status: string;
  statusCode: number;
  timestamp: Array<number>;
}

export interface AuthData {
  user: User;
  token: string;
}

export function* handleSignInRequest({ payload }: PayloadAction<LoginPayload>) {
  try {
    yield put(setUserStatus('LOADING'));
    const { data }: Response<AuthData> = yield call(authAPI.login, payload);
    localStorage.setItem('token', data.token);
    yield put(setUserStatus('SIGN_IN'));
    yield put(setUserData(data.user));
    payload.navigate('/home');
  } catch (error) {
    yield put(setUserStatus('ERROR'));
    // payload.navigate('/fail');
  }
}

export default function* authSaga() {
  yield takeLatest(signIn.type, handleSignInRequest);
}
