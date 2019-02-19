import React from "react";
import {
  DropDownList,
  Heading,
  Label,
  Option,
  OptionGroup,
  Row,
  SubmitButton
} from "meganui";

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
        <Label labelFor="foxes">Fox</Label>
        <DropDownList
          defaultValue=""
          hint="Choose a fox…"
          requirementsText="Please choose a fox"
        >
          <OptionGroup label="Lycalopex">
            <Option internalValue="Culpeo" label="Culpeo/Andean fox" />
            <Option internalValue="Darwin" label="Darwin's fox" />
            <Option
              internalValue="South American Gray"
              label="South American Gray fox"
            />
            <Option internalValue="Pampas" label="Pampas fox" />
            <Option internalValue="Sechuran" label="Sechuran fox" />
            <Option internalValue="Hoary" label="Hoary fox" />
          </OptionGroup>
          <OptionGroup label="Urocyon">
            <Option internalValue="Gray" label="Gray fox" />
            <Option internalValue="Island" label="Island fox" />
            <Option internalValue="Cozumel" label="Cozumel fox" />
          </OptionGroup>
        </DropDownList>
      </>
    );
  }
}
