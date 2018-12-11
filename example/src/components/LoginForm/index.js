import React, { Component } from 'react';
import { Footer } from '../../Footer';
import { EmailInput, Label, Hiperlink, Image, PasswordInput, Position, Spacing, Text } from 'meganui';
import { LabelPassword } from '../../LabelPassword';
import { Link } from 'react-router-dom'; 
import { LinkedInLoginButton } from '../../LinkedInLoginButton';
import { LoginButton } from '../../LoginButton';
import "./index.scss";

export default class LoginForm extends Component {

    getProps() {
        return {
            "id": "loginForm",
            "name": "loginForm",
            "autoCapitalize": "none",
            "className": "login-form",
            "method": "POST",
            "onSubmit": this.onSubmit
        };
    }

    render() {
        return (
            <form {...this.getProps()}>
                <Spacing position="top" size="auto">
                    <Position center>
                    <Image height="72px" src="logotype.png" />
                    </Position>
                </Spacing>
                <Spacing position="bottom" size="big" />
                <Spacing position="bottom">
                    <Label id="emailLabel" labelFor="email">Email</Label>
                    <EmailInput id="email" labelledBy="emailLabel"
                    hint="your.name@example.com"
                    required={true}
                    requirementsText="Please, enter a valid e-mail address, including the @ symbol"
                    size="big" />
                </Spacing>
                <Spacing position="bottom" size="bigger">
                    <LabelPassword>
                    <Label id="passwordLabel" labelFor="password">Password</Label>
                    <Text size="small">
                        <Link to="/forgot/">Forgot password?</Link>
                    </Text>
                    </LabelPassword>
                    <PasswordInput id="password" labelledBy="passwordLabel"
                    hint="Enter your password"
                    required={true}
                    requirementsText="Please, enter your password"
                    size="big" />
                </Spacing>
                <Spacing position="bottom">
                    <LoginButton />
                </Spacing>
                <Spacing position="bottom" size="big">
                    <LinkedInLoginButton />
                </Spacing>
                <Position center>
                    <Text size="small">
                    Don't have an account? <Hiperlink href="#">Get started</Hiperlink>
                    </Text>
                    <Text size="small">
                    <Link to="/privacy/">Privacy</Link>
                    </Text>
                </Position>
                <Footer>
                    <Text element="small">
                        Vulpi, made with <Text color="primary">❤</Text> in San Pedro Valley, © 2018.
                    </Text>
                </Footer>
            </form>
        );
    }

}