// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/SignUp' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;   