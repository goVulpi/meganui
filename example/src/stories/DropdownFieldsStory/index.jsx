import React from "react";
import { Row, DropDownList, SubmitButton, Heading, OptionGroup } from "meganui";

export default class DropdownFieldsStory extends React.PureComponent {
  render() {
    return (
      <>
      <Heading level={1}>Dropdown fields</Heading>
        <Row>
          <DropDownList
            options={[{ name: "This is a dropdown", value: "with-a-value" }]}
          />
        </Row>
        <Row>
          <DropDownList
            options={[
              {
                name: "This is a dropdown with big size",
                value: "with-a-value"
              }
            ]}
            size="big"
          />
        </Row>
        <Row>
          <DropDownList
            options={[
              {
                name: "This is a dropdown with bigger size",
                value: "with-a-value"
              }
            ]}
            size="bigger"
          />
        </Row>
        <Row>
          <DropDownList
            options={[
              {
                name: "This is a dropdown with biggest size",
                value: "with-a-value"
              }
            ]}
            size="biggest"
          />
        </Row>
        <Row>
          <form>
            <DropDownList
              hint="Select..."
              options={[
                { name: "This is a required dropdown", value: "with-a-value" }
              ]}
              required
              requirementsText="Please, select a valid option"
            />
            <SubmitButton>Try me</SubmitButton>
          </form>
        </Row>
        <Heading level={2}>Dropdown with option groups</Heading>
        <DropDownList><OptionGroup></OptionGroup></DropDownList>
      </>
    );
  }
}
