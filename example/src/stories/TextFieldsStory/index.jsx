import React from "react";
import { Row, TextInput } from "meganui";

export default class TextFieldsStory extends React.PureComponent {
  render() {
    return (
      <>
        <Row>
          <TextInput value="Text input" />
        </Row>
        <Row>
          <TextInput size="big" value="Big text input" />
        </Row>
        <Row>
          <TextInput size="bigger" value="Bigger text input" />
        </Row>
        <Row>
          <TextInput size="biggest" value="Biggest text input" />
        </Row>
        <Row>
          <TextInput multiline value="Multiline input (textarea)" />
        </Row>
        <Row>
          <TextInput multiline size="big" value="Big multiline input" />
        </Row>
      </>
    );
  }
}
