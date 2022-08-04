import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './features/auth/pages/Login/LoginPage';

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
      </Routes>
    </>
  );
}

export default App;
