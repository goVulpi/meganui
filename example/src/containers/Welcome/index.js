import React, { Component } from 'react';
import {
    AppContainer,
    Text
} from 'meganui';
import { Message } from '../../Message';

export default class Welcome extends Component {

    render() {
        return (
            <AppContainer>
                <Message>
                    <Text element="p" size="lead">
                        Oi, Paulo!
                    </Text>
                    <Text element="p" size="lead">
                        Eu sou a Megan, já nos conhecemos?
                    </Text>
                    <Text element="p" size="lead">
                        Seu cadastro com o email paulomelojunior@icloud.com está feito. Volte em breve, daqui a pouco teremos novidades por aqui.
                    </Text>
                    <Text element="p" size="lead"> 
                        Tchau!
                    </Text>
                </Message>
            </AppContainer>
        );
    }

}



