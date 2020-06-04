import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import Reset from './components/Reset';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact={true} component={Login}></Route>
      <Route path='/register' exact={true} component={Register}></Route>
      <Route path='/forgot' exact={true} component={Forgot}></Route>
      <Route path='/resetpassword/:token' exact={true} component={Reset}></Route>
      </Switch>
    </Router>
  );
}
export default App;
