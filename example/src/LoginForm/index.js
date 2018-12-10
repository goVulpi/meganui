import React, {Component} from 'react';
import './index.scss';

export class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        const loginInit = {
            body: JSON.stringify({"email": ""}),
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
        const { children } = this.props;
        return (
            <form id="loginForm" name="loginForm"
                autoCapitalize="none"
                className="login-form"
                method="POST"
                onSubmit={this.onSubmit}
                {...this.props}
                >
                {children}
            </form>
        );
    }

}