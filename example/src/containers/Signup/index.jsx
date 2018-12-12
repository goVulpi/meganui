import React, { Component } from 'react';
import { Banner } from '../../Banner';
import { Column } from '../../Column';
import { Link } from 'react-router-dom'; 
import { Row } from '../../Row';
import { NameInput, Label, Position, Spacing, EmailInput, PasswordInput, SubmitButton, Text, Button } from 'meganui';
import { FormBox } from '../../FormBox';

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind();
    }

    onSubmit(event) {
        event.preventDefault();
        console.log("Signed up");
    }

    render() {
        return (
            <Row>
                <Column>
                    <Banner></Banner>
                </Column>
                <Column>
                    <form method="post" onSubmit={this.onSubmit}>
                        <FormBox>
                            <Spacing position="bottom"/>
                            <Spacing position="bottom">
                                <Label id="nameLabel" labelFor="name">Name</Label>
                                <NameInput id="name"
                                    hint="Megan Fox"
                                    labelledBy="nameLabel"
                                    size="big"
                                    required={true}
                                    requirementsText="Please enter your full name" />
                            </Spacing>
                            <Spacing position="bottom">
                                <Label id="emailLabel" labelFor="email">Email</Label>
                                <EmailInput id="email"
                                    hint="your.name@example.com"
                                    labelledBy="emailLabel"
                                    size="big"
                                    required={true}
                                    requirementsText="Please enter your email address, including the @ symbol"
                                    />
                            </Spacing>
                            <Spacing position="bottom">
                                <Label id="newPasswordLabel" labelFor="newPassword">Password</Label>
                                <PasswordInput
                                    hint="More than 8 characters"
                                    id="newPassword"
                                    labelledBy="newPasswordLabel"
                                    required={true}
                                    requirementsText="Please enter a password with at least 8 characters"
                                    size="big"/>
                            </Spacing>
                            <Spacing position="bottom" size="big">
                                <Label id="confirmPasswordLabel" labelFor="confirmPassword">Confirm password</Label>
                                <PasswordInput
                                    hint="Repeat your password"
                                    id="confirmPassword"
                                    labelledBy="confirmPasswordLabel"
                                    required={true}
                                    requirementsText="Please enter the same password you entered before"
                                    size="big"/>
                            </Spacing>
                            <Spacing position="bottom">
                                <SubmitButton color="brand" block size="big">Sign up</SubmitButton>
                            </Spacing>
                            <Spacing position="bottom">
                                <Button color="dark" size="big" block>Sign up with GitHub</Button>
                            </Spacing>
                            <Spacing position="bottom" size="big">
                                <Button color="secondary" size="big" block>Sign up with LinkedIn</Button>
                            </Spacing>
                            <Position center>
                                <Text size="small">
                                    Already have an account? <Link to="/login/">Sign in</Link>
                                </Text>
                            </Position>
                        </FormBox>
                    </form>
                </Column>
            </Row>
        );
    }

}