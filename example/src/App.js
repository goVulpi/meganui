import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppContainer } from 'meganui';
import Login from './containers/Login';

export default class App extends Component {

  render() {

    const Privacy = () => <h2>Privacy</h2>;
    const Forgot = () => <h2>Forgot</h2>;

    return (

      <Router>
        <AppContainer>
          <Route path="/login/" component={Login} exact />
          <Route path="/forgot/" component={Forgot} />
          <Route path="/privacy/" component={Privacy} />
        </AppContainer>
      </Router>
    )
  }
}
