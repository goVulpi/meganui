import React, { Component } from 'react';
import { AppContainer, Button, Heading, Image, Position, Spacing } from 'meganui';
import { Banner } from './Banner';
import { Column } from './Column';
import { Login } from './Login';
import { Row } from './Row';

export default class App extends Component {
  render () {
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
                <Button size="big" color="brand" block>Entrar</Button>
              </Spacing>
              <Spacing position="bottom">
                <Button size="big" color="secondary" block>Entrar com LinkedIn</Button>
              </Spacing>
              <Button size="big" color="dark" block>Entrar com GitHub</Button>
              <Spacing position="top" size="auto">
                <small>
                  Vulpi, feito com ❤ no San Pedro Valley, © 2018.
                </small>
              </Spacing>
            </Login>
          </Column>
        </Row>
      </AppContainer>
    )
  }
}
