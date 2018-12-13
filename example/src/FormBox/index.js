import React, {Component} from 'react';
import { Image, Position, Spacing, Text } from 'meganui';
import { Footer } from '../Footer';
import { Fieldset } from '../Fieldset';
import './index.scss';

export class FormBox extends Component {

    render() {
        return (
            <div className="form-box">
                <Spacing position="top" size="auto">
                    <Position center>
                        <Image height="72px" src="../logotype.png" />
                    </Position>
                </Spacing>
                <Fieldset>
                    {this.props.children}
                </Fieldset>
                <Footer>
                    <Text element="small">
                        Vulpi, made with <Text color="primary">❤</Text> in San Pedro Valley, © 2018.
                    </Text>
                </Footer>
            </div>
        );
    }

}