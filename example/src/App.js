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
import { Footer } from './Footer';
import { LabelPassword } from './LabelPassword';
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
                  <Spacing position="bottom" size="big">
                    <Image height="72px" src="logotype.png"/>
                  </Spacing>
                </Position>
              </Spacing>
              <Spacing position="bottom">
                <label>Email</label>
                <TextInput size="big" hint="panda@vulpi.com.br"/>
              </Spacing>
              <Spacing position="bottom" size="bigger">
                <LabelPassword>
                  <label>Password</label>
                  <Text size="small">
                    <Hiperlink href="#">Forgot?</Hiperlink>
                  </Text>
                </LabelPassword>
                <TextInput size="big" hint="Enter your password"/>
              </Spacing>
              <Spacing position="bottom">
                <Button size="big" color="brand" block>Sign in</Button>
              </Spacing>
              <Spacing position="bottom" size="big">
                <Button size="big" color="secondary" block>Sign in with LinkedIn</Button>
              </Spacing>
              <Position center>
                <Text size="small">
                  Don't have an account? <Hiperlink href="#">Get started</Hiperlink>
                </Text>
              </Position>
              <Footer>
                <Text element="small">
                  Vulpi, made with <Text color="primary">❤</Text> in San Pedro Valley, © 2018.
                </Text>
              </Footer>
            </Login>
          </Column>
        </Row>
      </AppContainer>
    )
  }
}
