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
                        Muito bom te ver novamente, isso significa que as coisas estão dando certo.
                    </Text>
                    <Text element="p" size="lead">
                        Seu cadastro com o email paulomelojunior@icloud.com continua aqui comigo. Espero te ver novamente em breve.
                    </Text>
                    <Text color="light" element="p" size="lead"> 
                        ❤
                    </Text>
                </Message>
            </AppContainer>
        );
    }

}




