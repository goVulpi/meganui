import React, { Component } from 'react';
import { AppContainer } from 'meganui';
import { Column } from './Column';
import { Form } from './Form';

export default class App extends Component {
  render () {
    return (
      <AppContainer>
        <Column/>
        <Form/>
      </AppContainer>
    )
  }
}
