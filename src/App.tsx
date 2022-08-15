import { createTheme, ThemeProvider } from '@mui/material';
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
  const theme = createTheme({
    palette: {},
  });
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/fail" element={<LoginFail />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<Home />} />

              <Route path="explore" element={<Explore />} />

              <Route path="notifications" element={<Notifications />} />

              <Route path="messages" element={<Messages />} />

              <Route path="profile" element={<Profile />} />

              <Route path="more" element={<More />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
