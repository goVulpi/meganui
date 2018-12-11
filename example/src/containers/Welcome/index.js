import React, { Component } from 'react';
import {
    AppContainer,
    Image,
    Text
} from 'meganui';
import { WelcomeMessage } from '../../WelcomeMessage';

export default class Welcome extends Component {

    render() {
        return (
            <AppContainer>
                <WelcomeMessage>
                    <div className="ai"></div>
                    <div className="message">
                        <Text element="p" size="lead">Hi! I'm Megan. Have we met before?</Text>
                        <Text element="p">Lorem ipsum dolor sit amet.</Text>
                        <Text element="p">
                        consectetur adipiscing elit. Donec ultricies ante id nulla vestibulum posuere. Curabitur nisi risus, consectetur non massa ut, finibus pretium dolor. Sed at porta tellus. 
                        </Text>
                        <Text element="p"> 
                            Maecenas nec sem id ex congue efficitur.
                        </Text>
                    </div>
                    <Image height="64px" src="logotype-white.png"/>
                </WelcomeMessage>
            </AppContainer>
        );
    }

}




