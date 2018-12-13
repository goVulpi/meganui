import React, { Component } from 'react';
import { Banner } from '../../Banner';
import { Column } from '../../Column';
import { Row } from '../../Row';
import LoginForm from '../../components/LoginForm';
import { Toast } from 'meganui';
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        const loginInit = {
            body: JSON.stringify({ "email": "" }),
            method: "POST"
        };
        let loginRequest = new Request("https://reqres.in/api/login", loginInit);

        let successCallback = (response) => {
            console.log(response);
        };
        let errorCallback = (error) => {
            console.log("errrou", error);
        };
        fetch(loginRequest).then(successCallback, errorCallback);
    }

    render() {
        return (
            <Row>
                <Column>
                    <Banner>
                    </Banner>
                </Column>
                <Column>
                    <LoginForm onSubmit={this.onSubmit} />
                </Column>
                <Toast color="danger">Lorem ipsum dolor</Toast>
            </Row>
        );
    }

}




