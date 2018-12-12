import React, { Component } from 'react';
import { Banner } from '../../Banner';
import { Column } from '../../Column';
import { Row } from '../../Row';
import { NameInput, Label, Spacing, EmailInput, PasswordInput, SubmitButton, TelInput } from 'meganui';

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
                        <Spacing position="bottom">
                            <Label id="nameLabel" labelFor="name">Your name:</Label>
                            <NameInput id="name"
                                hint="Megan Fox" labelledBy="nameLabel" required={true}
                                requirementsText="Please enter your full name"
                            />
                        </Spacing>
                        <Spacing position="bottom">
                            <Label id="emailLabel" labelFor="email">Your email:</Label>
                            <EmailInput id="email"
                                hint="yourname@example.com" labelledBy="emailLabel" required={true}
                                requirementsText="Please enter your email address, including the @ symbol"
                            />
                        </Spacing>
                        <Spacing position="bottom">
                            <Label id="newPasswordLabel" labelFor="newPassword">Create a new password:</Label>
                            <PasswordInput id="newPassword"
                                labelledBy="newPasswordLabel"
                                required={true} requirementsText="Please enter a password with at least 8 characters" />
                        </Spacing>
                        <Spacing position="bottom">
                            <Label id="confirmPasswordLabel" labelFor="confirmPassword">Confirm the new password:</Label>
                            <PasswordInput id="confirmPassword"
                                labelledBy="confirmPasswordLabel"
                                required={true} requirementsText="Please enter the same password you entered before" />
                        </Spacing>
                        <Spacing position="bottom">
                            <Label id="telLabel" labelFor="tel">Your phone number:</Label>
                            <TelInput id="tel"
                                labelledBy="telLabel" required={true}
                                requirementsText="Please enter a valid phone number (you don't need to enter country code)" />
                        </Spacing>
                        <SubmitButton color="primary">Sign up for free</SubmitButton>
                    </form>
                </Column>
            </Row>
        );
    }

}