import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from '../src/components/logIn'
import Home from './components/HomePage'
export default class App extends Component {

  state = {
    isAuth: false,
    token: null
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }
    const userId = localStorage.getItem('userId');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    this.setState({ isAuth: true, token: token, userId: userId });
    this.setAutoLogout(remainingMilliseconds);

  }

  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
  };

  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  loginHandler = (e, loginData) => {
    e.preventDefault()
    fetch('http://localhost:5000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Name: loginData.adminName,
        Password: loginData.adminPassword
      })
    })
      .then(res => {
        console.log(res)
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Could not authenticate you!');
        }
        return res.json();
      }).then(resData => {
        console.log(resData)
        this.setState({
          isAuth: resData.isLogged,
          token: resData.token
        })
        localStorage.setItem('token', resData.token);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Switch>

              <Route exact path="/">
                <Login LogIn={this.loginHandler} IsLogged={this.state.isAuth} />
              </Route>

              <Route exact path="/home" >
                <Home />
              </Route>

            </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}