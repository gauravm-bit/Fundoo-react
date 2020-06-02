import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact={true} component={Login}></Route>
      <Route path='/register' exact={true} component={Register}></Route>
      </Switch>
    </Router>
  );
}
export default App;
