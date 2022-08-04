import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import LoginPage from './features/auth/pages/Login/LoginPage';
import { RegisterPage } from './features/auth/pages/Registration/RegisterPage';
import { Home } from './features/Home/Home';

const LoginFail = () => {
  return <>Hello from login fail</>;
};

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/fail" element={<LoginFail />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
