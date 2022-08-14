import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import LoginPage from './features/auth/pages/Login/LoginPage';
import { RegisterPage } from './features/auth/pages/Registration/RegisterPage';
import { Explore } from './features/Explore/Explore';
import { Home } from './features/Home/Home';
import { Messages } from './features/Messages/Messages';
import { More } from './features/More/More';
import { Notifications } from './features/Notifications/Notifications';
import { Profile } from './features/Profile/Profile';

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

        <Route path="/" element={<Layout />}>
          <Route element={<PrivateRoute />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="explore" element={<Explore />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="notifications" element={<Notifications />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="messages" element={<Messages />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="more" element={<More />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
