import React, { Component } from "react";
import { Button, Toast } from "meganui";
import { action } from "@storybook/addon-actions";

export default class ToastStory extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleToastCloseButtonClick = this.handleToastCloseButtonClick.bind(this);
    }

    state = {
        openToast: false
    };

    handleButtonClick = () => {
        action('toast open');
        this.setState({
            openToast: true
        })
    };

    handleToastCloseButtonClick = () => {
        action('toast closed');
        this.setState({
            openToast: false
        })
    };

    render() {
        const { openToast } = this.state;
        return (
            <div>
                <Button aria-controls="storyToast" onClick={this.handleButtonClick}>Open toast</Button>
                <Toast id="storyToast"
                    closeButtonContent="Close"
                    closeButtonLabel="Close button"
                    color="danger"
                    onCloseButtonClick={this.handleToastCloseButtonClick}
                    open={openToast}>
                    This is a toast
                </Toast>
            </div>
        );
    }

}