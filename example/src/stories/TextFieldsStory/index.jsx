import React from "react";
import { Row, TextInput, DropDownList, SubmitButton } from "meganui";

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
        <Row>
          <DropDownList
            options={[{ name: "This is a dropdown", value: "with-a-value" }]}
          />
        </Row>
        <Row>
          <form>
          <DropDownList
          hint="Select..."
            options={[{ name: "This is a required dropdown", value: "with-a-value" }]}
            required
          />
          <SubmitButton>Try me</SubmitButton>
          </form>
        </Row>
      </>
    );
  }
}
