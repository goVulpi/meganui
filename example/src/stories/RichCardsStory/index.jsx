import React from "react";
import {
  AvatarImage,
  Card,
  CardTitle,
  Column,
  Heading,
  Row,
  CardDescription,
  CardSubtitle,
  AppContainer,
  Hiperlink
} from "meganui";

const InteractiveColouredCardColumn = ({ color, avatarUrl }) => (
  <Column horizontalGapSize="small">
    <Card centeredContent color={color} interactive verticalSpace="small">
      <AvatarImage
        alt="Portrait of a person"
        src={avatarUrl}
      >
        Avatar image with caption
              </AvatarImage>
      <CardTitle><Hiperlink href="#">This is a title with hiperlink</Hiperlink></CardTitle>
      <CardSubtitle>This is a subtitle</CardSubtitle>
      <CardDescription>This is a interactive card with <strong>{color ? color : 'no'}</strong> background, avatar, title, subtitle and description</CardDescription>
    </Card>
  </Column>
);

export default class RichCardsStory extends React.PureComponent {
  getRandomAvatarUrl() {
    const randomNumber = Math.floor(Math.random() * 100);
    const categories = ["men", "women"];
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];

    return `https://randomuser.me/api/portraits/${randomCategory}/${randomNumber}.jpg`;
  }

  render() {
    return (
      <AppContainer>
        <Row>
          <Column horizontalGapSize="small">
            <Card centeredContent verticalSpace="small">
              <AvatarImage
                alt="Portrait of a person"
                src={this.getRandomAvatarUrl()}
              />
              <CardTitle>Card with title and avatar</CardTitle>
            </Card>
          </Column>
          <Column horizontalGapSize="small">
            <Card centeredContent verticalSpace="small">
              <AvatarImage
                alt="Portrait of a person"
                src={this.getRandomAvatarUrl()}
              />
              <CardTitle>Card with title, avatar...</CardTitle>
              <CardDescription>... and description</CardDescription>
            </Card>
          </Column>
          <Column horizontalGapSize="small">
            <Card centeredContent verticalSpace="small">
              <AvatarImage
                alt="Portrait of a person"
                src={this.getRandomAvatarUrl()}
              >
                Avatar image with caption
              </AvatarImage>
              <CardTitle>Card with title, avatar...</CardTitle>
              <CardDescription>And description</CardDescription>
            </Card>
          </Column>
        </Row>
        <Row>
          <Column horizontalGapSize="small">
            <Card centeredContent verticalSpace="small">
              <CardTitle>Card with title and subtitle</CardTitle>
              <CardSubtitle>This is a subtitle</CardSubtitle>
            </Card>
          </Column>
          <Column horizontalGapSize="small">
            <Card centeredContent verticalSpace="small">
              <CardTitle>This is a title</CardTitle>
              <CardSubtitle>This is a subtitle</CardSubtitle>
              <CardDescription>This is a description</CardDescription>
            </Card>
          </Column>
          <Column horizontalGapSize="small">
            <Card centeredContent interactive verticalSpace="small">
              <AvatarImage
                alt="Portrait of a person"
                src={this.getRandomAvatarUrl()}
              >
                Avatar image with caption
              </AvatarImage>
              <CardTitle><Hiperlink href="#">This is a title with hiperlink</Hiperlink></CardTitle>
              <CardSubtitle>This is a subtitle</CardSubtitle>
              <CardDescription>This is a interactive card with avatar, title, subtitle and description</CardDescription>
            </Card>
          </Column>
        </Row>
        <hr />
        <Heading level={2}>Coloured cards</Heading>
        <Row>
          <InteractiveColouredCardColumn color="primary" avatarUrl={this.getRandomAvatarUrl()} />
          <InteractiveColouredCardColumn color="secondary" avatarUrl={this.getRandomAvatarUrl()} />
          <InteractiveColouredCardColumn color="brand" avatarUrl={this.getRandomAvatarUrl()} />
        </Row>
        <Row>
          <InteractiveColouredCardColumn color="success" avatarUrl={this.getRandomAvatarUrl()} />
          <InteractiveColouredCardColumn color="warning" avatarUrl={this.getRandomAvatarUrl()} />
          <InteractiveColouredCardColumn color="danger" avatarUrl={this.getRandomAvatarUrl()} />
        </Row>
        <Row>
          <InteractiveColouredCardColumn color="dark" avatarUrl={this.getRandomAvatarUrl()} />
          <InteractiveColouredCardColumn color="info" avatarUrl={this.getRandomAvatarUrl()} />
          <InteractiveColouredCardColumn avatarUrl={this.getRandomAvatarUrl()} />
        </Row>
      </AppContainer>
    );
  }
}
