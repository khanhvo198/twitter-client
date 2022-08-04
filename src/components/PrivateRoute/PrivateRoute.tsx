import { FC, ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute: FC = (): ReactElement => {
  const isLoggedIn = localStorage.getItem('token');
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <Outlet />;
};
