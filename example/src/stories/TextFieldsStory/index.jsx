import React from "react";
import { Row, TextInput, DropDownList, SubmitButton } from "meganui";

export default class TextFieldsStory extends React.PureComponent {
  render() {
    return (
      <>
        <Row>
          <TextInput hint="Text input" />
        </Row>
        <Row>
          <TextInput disabled={true} hint="Disabled text input" />
        </Row>
        <Row>
          <TextInput hint="Text input with suggestions" suggestedOptions={["Suggestion A", "Suggestion B"]} />
        </Row>
        <Row>
          <TextInput size="big" hint="Big text input" />
        </Row>
        <Row>
          <TextInput size="bigger" hint="Bigger text input" />
        </Row>
        <Row>
          <TextInput size="biggest" hint="Biggest text input" />
        </Row>
        <Row>
          <TextInput multiline hint="Multiline input (textarea)" />
        </Row>
        <Row>
          <TextInput multiline size="big" hint="Big multiline input" />
        </Row>
        <Row>
          <DropDownList
            options={[{ name: "This is a dropdown", value: "with-a-value" }]}
          />
        </Row>
        <Row>
          <DropDownList
            options={[{ name: "This is a dropdown with big size", value: "with-a-value" }]}
            size="big"
          />
        </Row>
        <Row>
          <DropDownList
            options={[{ name: "This is a dropdown with bigger size", value: "with-a-value" }]}
            size="bigger"
          />
        </Row>
        <Row>
          <DropDownList
            options={[{ name: "This is a dropdown with biggest size", value: "with-a-value" }]}
            size="biggest"
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
