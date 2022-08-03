import { call, put, takeLatest } from "redux-saga/effects";
import { authAPI } from "../../api/authApi";
import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { LoginPayload, setUserStatus, signIn } from './authSlice';


export function* handleSignInRequest(action: PayloadAction<LoginPayload>) {
  console.log("Hello from saga")
  yield put(setUserStatus('LOADING'))
  const data: Promise<any> = yield call(authAPI.login, action.payload)
  console.log(data)
}


export default function* authSaga() {
  yield takeLatest(signIn.type, handleSignInRequest)
}