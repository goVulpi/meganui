import React from "react";
import { SubmitButton } from "meganui";

export class LoginButton extends React.Component {

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

    getButtonProps() {
        let { disabled } = this.state;
        return {
            "block": true,
            "color": "brand",
            "disabled": disabled,
            "onClick": this.onClick,
            "size": "big"
        };
    }

    render() {
        const { text } = this.state;
        return(
            <SubmitButton {...this.getButtonProps()}>{ text }</SubmitButton>
        );
    }

}