import React, { Component } from 'react';
import { AppContainer, Button, Heading, Image, Text, TextInput } from 'meganui';

export default class App extends Component {
  render () {
    return (
      <AppContainer>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Heading level={2}>Hello</Heading>
        <Image src="https://s3.amazonaws.com/signature-vulpi/pictures/Jimmy.png"/>
        <TextInput />
        <Text>This is an inline text</Text>
        <Text element="paragraph">This is a paragraph text</Text>
      </AppContainer>
    )
  }
}
