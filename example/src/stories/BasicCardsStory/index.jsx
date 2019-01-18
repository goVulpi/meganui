import React from "react";
import {
  AvatarImage,
  Card,
  CardDescription,
  CardTitle,
  Column,
  Row,
  Heading
} from "meganui";

export default class BasicCardsStory extends React.Component {
  render() {
    return (
      <>
        <Heading>Cards</Heading>
        <Row>
          <Column horizontalGapSize="small">
            <Card verticalSpace="small">Static card without a title</Card>
          </Column>
          <Column horizontalGapSize="small">
            <Card centeredContent verticalSpace="small">
              Static card with centered content
            </Card>
          </Column>
          <Column horizontalGapSize="small">
            <Card interactive verticalSpace="small">
              Interactive card (hover me)
            </Card>
          </Column>
        </Row>
        <Heading level={2}>Cards with vertical spacing</Heading>
        <Row>
          <Column horizontalGapSize="small">
            <Card verticalSpace="small">Card with small vertical space</Card>
            <hr />
          </Column>
          <Column horizontalGapSize="small">
            <Card verticalSpace="medium">Card with medium vertical space</Card>
            <hr />
          </Column>
          <Column horizontalGapSize="small">
            <Card verticalSpace="large">Card with large vertical space</Card>
            <hr />
          </Column>
        </Row>
        <Heading level={2}>Cards with title and/or description</Heading>
        <Row>
          <Column horizontalGapSize="small">
            <Card verticalSpace="small">
              <CardTitle>Card with a title</CardTitle>Content
            </Card>
          </Column>
          <Column horizontalGapSize="small">
            <Card centeredContent verticalSpace="small">
              <CardTitle>Centered card title</CardTitle>Centered card content
            </Card>
          </Column>
        </Row>
        <Row>
          <Column horizontalGapSize="small">
            <Card>
              <CardDescription>Card with semantic description</CardDescription>
            </Card>
          </Column>
          <Column horizontalGapSize="small">
            <Card>
              <CardTitle>Card with title...</CardTitle>
              <CardDescription>...and semantic description</CardDescription>
            </Card>
          </Column>
          <Column horizontalGapSize="small">
            <Card centeredContent>
              <CardTitle>Centered card with title...</CardTitle>
              <CardDescription>...and semantic description.</CardDescription>
            </Card>
          </Column>
        </Row>
      </>
    );
  }
}
