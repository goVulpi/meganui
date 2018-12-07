import React, { Component } from 'react';
import {
  AppContainer,
  Button,
  Image,
  Position,
  Spacing,
  Text,
  /* eslint-disable no-unused-vars */
  Heading,
  Hiperlink,
  Label,
  TextInput
  /* eslint-enable no-unused-vars */
} from 'meganui';
import { Banner } from './Banner';
import { Column } from './Column';
import { Login } from './Login';
import { Row } from './Row';
import LoginButton from './LoginButton';

export default class App extends Component {

  render() {
    return (
      <AppContainer>
        <Row>
          <Column>
            <Banner>
            </Banner>
          </Column>
          <Column>
            <Login>
              <Spacing position="top" size="auto">
                <Position center>
                  <Spacing position="bottom">
                    <Image height="72px" src="logotype.png"/>
                  </Spacing>
                </Position>
              </Spacing>
              <Spacing position="bottom">
                <LoginButton></LoginButton>
                <Button size="big" color="brand" block onClick={this.handleClick}>Entrar</Button>
              </Spacing>
              <Spacing position="bottom">
                <Button size="big" color="secondary" block>Entrar com LinkedIn</Button>
              </Spacing>
              <Button size="big" color="dark" block>Entrar com GitHub</Button>
              <Spacing position="top" size="auto">
                <Text element="small">
                  Vulpi, feito com ❤ no San Pedro Valley, © 2018.
                </Text>
              </Spacing>
            </Login>
          </Column>
        </Row>
      </AppContainer>
    )
  }
}
