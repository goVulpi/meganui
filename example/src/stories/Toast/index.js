import React, { Component } from "react";
import { Toast } from "meganui";
import { action } from "@storybook/addon-actions";

export default class ToastStory extends Component {

    render() {
        return (<Toast color="danger">Lorem ipsum dolor sit amet, consectetur adipiscing. Ut sed elementum metus.</Toast>);
    }

}