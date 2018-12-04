import React, { Component } from 'react';
import { AppContainer, Button, Heading, Image } from 'meganui';

export default class App extends Component {
  render () {
    return (
      <AppContainer>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Heading level={2}>Hello</Heading>
        <Image src="https://s3.amazonaws.com/signature-vulpi/pictures/Jimmy.png"/>
      </AppContainer>
    )
  }
}
