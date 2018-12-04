import React, { Component } from 'react';
import { Button, Heading } from 'meganui';

export default class App extends Component {
  render () {
    return (
      <div>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Heading level={2}>Hello</Heading>
      </div>
    )
  }
}
