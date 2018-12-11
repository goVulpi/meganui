import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppContainer } from 'meganui';
import Login from './containers/Login';
import Welcome from './containers/Welcome';
import Signup from './containers/Signup';

export default class App extends Component {

  render() {

    const Forgot = () => <h2>Forgot</h2>;

    return (

      <Router>
        <AppContainer>
          <Route path="/login/" component={Login} exact />
          <Route path="/forgot/" component={Forgot} />
          <Route path="/welcome/" component={Welcome} />
          <Route path="/signup/" component={Signup} />
        </AppContainer>
      </Router>
    )
  }
}
