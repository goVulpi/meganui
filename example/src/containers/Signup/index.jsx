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

    state = {
        name: "",
        email: "",
        newPassword: "",
        confirmPassword: "",
        tel: "",
        loading: false
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = event => {
        const target = event.target;
        const value = ("checkbox" === target.type) ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({loading: true});
        const data = {
            "email": this.state.email,
            "password": this.state.password
        };
        try {
            const response = await axios.post("https://reqres.in/api/register", {data});
            console.log(response);
            this.setState({loading: false});
        }
        catch(e) {
            this.setState({loading: false});
            console.log("errou", e.response);
        }
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
                            <fieldset disabled={this.state.loading}>
                                <Spacing position="bottom"/>
                                <Spacing position="bottom">
                                    <Label id="nameLabel" labelFor="name">Name</Label>
                                    <NameInput id="name"
                                        hint="Your Name"
                                        labelledBy="nameLabel"
                                        onChange={this.handleInputChange}
                                        required={true}
                                        requirementsText="Please enter your full name"
                                        size="big"
                                        value={this.state.name}
                                    />
                                </Spacing>
                                <Spacing position="bottom">
                                    <Label id="telLabel" labelFor="tel">Phone number</Label>
                                    <TelInput id="tel"
                                        hint="Phone number with area code"
                                        labelledBy="telLabel"
                                        onChange={this.handleInputChange}
                                        required={true}
                                        requirementsText="Please enter a valid phone number, including area code"
                                        size="big"
                                        value={this.state.tel}
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
                                <Spacing position="bottom" size="bigger">
                                    <Label id="newPasswordLabel" labelFor="newPassword">New password</Label>
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
                                    <SubmitButton color="brand" block size="big">
                                        <span hidden={!this.state.loading}>Loading&hellip;</span>
                                        <span hidden={this.state.loading}>Sign up for free</span>
                                    </SubmitButton>
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
                            </fieldset>
                        </FormBox>
                    </form>
                </Column>
            </Row>
        );
    }

}