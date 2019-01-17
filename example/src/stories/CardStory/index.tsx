import React from "react";
import { Card } from "meganui";

export default class CardStory extends React.Component {
  render() {
    return (
      <>
        <Card>Card without a title</Card>
        <Card title="Title">Card with a title</Card>
      </>
    );
  }
}
