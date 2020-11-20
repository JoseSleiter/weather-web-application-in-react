import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

import HomePage from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Login />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

          {/* <Route exact component={NotFoundPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
