import React, { Component } from 'react';
import { Banner } from '../../Banner';
import { Column } from '../../Column';
import { Link } from 'react-router-dom'; 
import { Row } from '../../Row';
import {
    Button,
    EmailInput,
    Label,
    NameInput,
    PasswordInput,
    Position,
    Spacing,
    SubmitButton,
    TelInput,
    Text
} from 'meganui';
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
                                    hint="Your Name"
                                    labelledBy="nameLabel"
                                    size="big"
                                    required={true}
                                    requirementsText="Please enter your full name" />
                            </Spacing>
                            <Spacing position="bottom">
                                <Label id="telLabel" labelFor="tel">Phone number</Label>
                                <TelInput id="tel"
                                    hint="Phone number with area code"
                                    labelledBy="telLabel"
                                    required={true}
                                    requirementsText="Please enter a valid phone number, including area code"
                                    size="big" />
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
                            <Spacing position="bottom" size="bigger">
                                <Label id="newPasswordLabel" labelFor="newPassword">New password</Label>
                                <PasswordInput id="newPassword"
                                    hint="8 characters or more"
                                    labelledBy="newPasswordLabel"
                                    required={true}
                                    requirementsText="Please enter a password with at least 8 characters"
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