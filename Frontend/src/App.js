import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from '../src/components/logIn'

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          {/* <Navbar /> */}
          <div>
            <Switch>

              <Route exact path="/">
                <Login />
              </Route>
              {/* 
            <Route exact path="/home" >
              <Home />
            </Route> */}

            </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}