import React, { Component } from "react";
import { Loading } from "meganui";

export default class LoadingStory extends Component {

    render() {
        return (
            <div>
                <Loading type="icon" />
                <Loading />
            </div>
        );
    }

}