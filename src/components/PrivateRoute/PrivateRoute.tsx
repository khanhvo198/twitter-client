import { FC, ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export interface tokenObject {
  exp: Number;
}

export const PrivateRoute: FC = (): ReactElement => {
  const isLoggedIn = localStorage.getItem('token');
  console.log(isLoggedIn);
  const jwtDecode: tokenObject = jwt_decode(isLoggedIn!);
  console.log(jwtDecode);
  if (jwtDecode.exp < Date.now() / 1000) {
    localStorage.clear();
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
