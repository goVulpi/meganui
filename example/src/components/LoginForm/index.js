import React, { Component } from 'react';
import { EmailInput, Label, PasswordInput, Position, Spacing, Text, Button } from 'meganui';
import { LabelPassword } from '../../LabelPassword';
import { Link } from 'react-router-dom'; 
import { LinkedInLoginButton } from '../../LinkedInLoginButton';
import { LoginButton } from '../../LoginButton';
import { FormBox } from '../../FormBox';

export default class LoginForm extends Component {

    getProps() {
        return {
            "id": "loginForm",
            "name": "loginForm",
            "autoCapitalize": "none",
            "method": "POST",
            "onSubmit": this.onSubmit
        };
    }

    render() {
        return (
            <form {...this.getProps()}>
                <FormBox>
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
                    <Spacing position="bottom">
                        <Button block color="dark" size="big">Sign in with GitHub</Button>
                    </Spacing>
                    <Spacing position="bottom" size="big">
                        <LinkedInLoginButton />
                    </Spacing>
                    <Position center>
                        <Text size="small">
                            Don't have an account? <Link to="/signup/">Get started</Link>
                        </Text>
                    </Position>
                    </FormBox>
            </form>
        );
    }

}