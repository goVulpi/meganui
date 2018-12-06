import React, { Component } from 'react';
import { AppContainer, Button, Heading, Image, Position } from 'meganui';
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
              <Position center>
                <Image height="72px" src="logotype.png"/>
              </Position>
              <Button size="big" color="brand" block>Entrar</Button>
              <Button size="big" color="secondary" block>Entrar com LinkedIn</Button>
              <Button size="big" color="dark" block>Entrar com GitHub</Button>
            </Login>
          </Column>
        </Row>
      </AppContainer>
    )
  }
}
