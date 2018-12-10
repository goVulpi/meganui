import React from "react";
import { Button } from "meganui";

export class LinkedInLoginButton extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind();
    };

    onClick = () => {
        window.location.href = "http://192.168.20.106:3000/login";
    };

    getButtonProps() {
        return {
            "block": true,
            "color": "secondary",
            "size": "big"
        };
    };

    render() {
        return (
            <Button size="big" color="secondary" block={true} onClick={this.onClick}>Sign in with LinkedIn</Button>
        );
    }

}