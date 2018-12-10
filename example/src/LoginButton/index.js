import React from "react";
import { Button } from "meganui";

export default class LoginButton extends React.Component {

    state = {
        disabled: false,
        text: "Sign up"
    }

    onClick = () => {
        this.setState({
            disabled: true,
            text: "Loading..."
        });
    }

    render() {
        let { disabled, text } = this.state;
        return(
            <Button color="brand" size="big" block disabled={disabled} onClick={this.onClick}>{ text }</Button>
        );
    }

}