import React, { Component } from 'react';
import axios from 'axios';
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            name: "",
            email: "",
            newPassword: "",
            confirmPassword: "",
            tel: ""
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = ("checkbox" === target.type) ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = this.state;
        axios.post("https://reqres.in/api/register", { data }).then(res => console.log(res.data));
        
    }

    render() {
        return (
            <Row>
                <Column>
                    <Banner>{this.state.name} {this.state.email} {this.state.name}</Banner>
                </Column>
                <Column>
                    <form method="post" onSubmit={this.handleSubmit}>
                        <FormBox>
                            <Spacing position="bottom"/>
                            <Spacing position="bottom">
                                <Label id="nameLabel" labelFor="name">Name</Label>
                                <NameInput id="name"
                                    hint="Megan Fox"
                                    labelledBy="nameLabel"
                                    onChange={this.handleInputChange}
                                    required={true}
                                    requirementsText="Please enter your full name"
                                    size="big"
                                    value={this.state.name}
                                />
                            </Spacing>
                            <Spacing position="bottom">
                                <Label id="emailLabel" labelFor="email">Email</Label>
                                <EmailInput id="email"
                                    hint="your.name@example.com"
                                    labelledBy="emailLabel"
                                    onChange={this.handleInputChange}
                                    required={true}
                                    requirementsText="Please enter your email address, including the @ symbol"
                                    size="big"
                                    value={this.state.email}
                                />
                            </Spacing>
                            <Spacing position="bottom">
                                <Label id="newPasswordLabel" labelFor="newPassword">Create a new password</Label>
                                <PasswordInput id="newPassword"
                                    hint="8+ characters"
                                    labelledBy="newPasswordLabel"
                                    onChange={this.handleInputChange}
                                    required={true}
                                    requirementsText="Please enter a password with at least 8 characters"
                                    size="big"
                                    value={this.state.newPassword}
                                />
                            </Spacing>
                            <Spacing position="bottom">
                                <Label id="confirmPasswordLabel" labelFor="confirmPassword">Confirm password</Label>
                                <PasswordInput id="confirmPassword"
                                    hint="Confirm the password entered above"
                                    labelledBy="confirmPasswordLabel"
                                    onChange={this.handleInputChange}
                                    required={true}
                                    requirementsText="Please enter the same password you entered before"
                                    size="big"
                                    value={this.state.confirmPassword}
                                />
                            </Spacing>
                            <Spacing position="bottom" size="big">
                                <Label id="telLabel" labelFor="tel">Phone number</Label>
                                <TelInput id="tel"
                                    hint="Phone number with area code"
                                    labelledBy="telLabel"
                                    onChange={this.handleInputChange}
                                    required={true}
                                    requirementsText="Please enter a valid phone number, including area code"
                                    size="big"
                                    value={this.state.tel} />
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