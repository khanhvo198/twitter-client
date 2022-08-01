import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './features/auth/pages/Login/LoginPage';

const Home = () => {
  return (
    <div>
      Hello from Home
    </div>
  )
}

function App() {
  return (
    <>
      <Switch>
        <Route path='/login' >
          <LoginPage />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
