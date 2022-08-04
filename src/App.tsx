import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './features/auth/pages/Login/LoginPage';
import { RegisterPage } from './features/auth/pages/Registration/RegisterPage';

const Home = () => {
  return <div>Hello from Home</div>;
};

const LoginFail = () => {
  return <>Hello from login fail</>;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fail" element={<LoginFail />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
