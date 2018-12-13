import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppContainer } from 'meganui';
import Login from './containers/Login';
import Welcome from './containers/Welcome';
import WelcomeBack from './containers/WelcomeBack';
import Signup from './containers/Signup';

export default class App extends Component {

  render() {

    const LoginCallback = () => <h2>Login callback</h2>;

    return (

      <Router>
        <AppContainer>
          <Route path="/login/" component={Login} exact />
          <Route path="/welcome/" component={Welcome} />
          <Route path="/welcome-back/" component={WelcomeBack} />
          <Route path="/signup/" component={Signup} />
          <Route path="/login-callback/" component={LoginCallback} />
        </AppContainer>
      </Router>
    )
  }
}
