import React, { Component } from "react";
import { Button } from "meganui";
import { action } from "@storybook/addon-actions";

export default class ButtonStory extends Component {

    render() {
        return (<Button onClick={action('clicked')}>Press me</Button>);
    }

}