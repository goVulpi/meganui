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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        console.log("Handling input change");
        const target = event.target;
        const { checked, name, type, value } = target;
        const fieldValue = ("checkbox" === type) ? checked : value;
        this.setState({
            [name]: fieldValue
        });
        switch (name) {
            case "email": this.handleEmailChange(event); break;
            case "name": this.handleNameChange(event); break;
            case "password": this.handlePasswordChange(event); break;
            case "tel": this.handleTelChange(event); break;
            default: Function.prototype(); break;
        }
    }

    setCustomValidity = (target, validityMessages) => {
        console.log("Clearing custom validity");
        target.setCustomValidity("");

        for (let prop in validityMessages) {
            if (target.validity[prop]) {
                console.log("Setting custom validity", prop, target.validity[prop]);
                target.setCustomValidity(validityMessages[prop]);
            }
        }
    }

    handleEmailChange = event => {
        this.setCustomValidity(event.target, {
            "patternMismatch": "Please type a valid email address, including the @ sign",
            "tooLong": "Please check the length of email address. It seems too long",
            "typeMismatch": "Please type a valid email address, including the @ sign",
            "valueMissing": "Please type a valid email address. An email is required to signup at Vulpi."
        });
    };

    handleNameChange = event => {
        this.setCustomValidity(event.target, {
            "patternMismatch": "Please type your name, including first and last name",
            "tooLong": "Please check the length of your name. It seems so long",
            "typeMismatch": "Please type your name. Don't include special characters or numbers",
            "valueMissing": "Please type your first and last name. They are required to signup at Vulpi"
        });
    };

    handleTelChange = event => {
        this.setCustomValidity(event.target, {
            "patternMismatch": "Please type a valid phone number, including area code",
            "tooLong": "Please check the length of your phone number. It seems so long",
            "typeMismatch": "Please type your mobile phone number. Don't include alpha characters",
            "valueMissing": "Please type your mobile phone number. It is required to signup at Vulpi"
        });
    };

    handlePasswordChange = event => {
        this.setCustomValidity(event.target, {
            "patternMismatch": "Please create a password, but do not be so creative",
            "tooLong": "A little too safe, do not you think? Please try to enter a shorter password",
            "typeMismatch": "Plase create a password"
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ loading: true });
        const data = {
            "email": this.state.email,
            "password": this.state.password
        };
        try {
            const response = await axios.post("https://reqres.in/api/register", { data });
            console.log(response);
            this.setState({ loading: false });
        }
        catch (e) {
            this.setState({ loading: false });
            console.log("errou", e.response);
        }
    }

    render() {
        return (
            <Row>
                <Column>
                    <Banner></Banner>
                </Column>
                <Column>
                    <form method="post" onSubmit={this.handleSubmit}>
                        <FormBox disabled={this.state.loading}>
                            <Spacing position="bottom" />
                            <Spacing position="bottom">
                                <Label id="nameLabel" labelFor="name">Name</Label>
                                <NameInput id="name"
                                    hint="Your Name"
                                    labelledBy="nameLabel"
                                    onChange={this.handleNameChange}
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
                                    onChange={this.handleTelChange}
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
                                    onChange={this.handleEmailChange}
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
                                    onChange={this.handlePasswordChange}
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
                        </FormBox>
                    </form>
                </Column>
            </Row>
        );
    }

}