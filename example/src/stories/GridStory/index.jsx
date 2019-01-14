import React, { Component } from "react";
import { Column, Row } from "meganui";

export default class GridStory extends Component {

    render() {
        return (
            <>
                <Row>This is a row without columns.</Row>
                <Row>
                    <Column>This is a column inside a row</Column>
                </Row>
                <Row>
                    <Column>This is the first column of two</Column>
                    <Column>This is the second (and last) column of two</Column>
                </Row>
            </>
        );
    }

}