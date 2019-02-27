import React, { Component } from "react";
import { Button, Hiperlink, YasssIcon, YesIcon, NoIcon } from "meganui";
import { action } from "@storybook/addon-actions";

export default class ButtonStory extends Component {
  render() {
    return (
      <>
        <Button onClick={action("clicked")}>Press me</Button>
        <Hiperlink button href="#">
          Hiperlink button
        </Hiperlink>
        <hr />
        <div style={{ display: "flex" }}>
          <Button color="danger" circular id="dontIconButton">
            <NoIcon id="dontIcon" tooltipText="Don't">
              Don't
            </NoIcon>
          </Button>
          <Button color="secondary" circular id="yesIconButton" size="big">
            <YesIcon id="yesIcon" tooltipText="Yes">
              Yes
            </YesIcon>
          </Button>
          <Button color="brand" circular id="yasssIconButton">
            <YasssIcon id="yasssIcon" tooltipText="Yasss">
              Yasss
            </YasssIcon>
          </Button>
        </div>
      </>
    );
  }
}
