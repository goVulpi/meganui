import React, { Component } from 'react';
import { AppContainer, Button, Heading, Image } from 'meganui';
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
              <Heading>
                Hi,<br/>
                I'm Megan!
              </Heading>
            </Login>
          </Column>
        </Row>
      </AppContainer>
    )
  }
}
