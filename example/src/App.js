import React, { Component } from 'react';
import { Button, Heading, AppContainer } from 'meganui';

export default class App extends Component {
  render () {
    return (
      <AppContainer>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Heading level={2}>Hello</Heading>
      </AppContainer>
    )
  }
}
