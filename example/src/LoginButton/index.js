import React from "react";
import { Button } from "meganui";

export default class LoginButton extends React.Component {

    state = {
        disabled: false,
        text: "Press me"
    }

    onClick = () => {
        this.setState({
            disabled: true,
            text: "I was pressed"
        });
    }

    render() {
        let { disabled, text } = this.state;
        return(
            <Button disabled={disabled} onClick={this.onClick}>{ text }</Button>
        );
    }

}