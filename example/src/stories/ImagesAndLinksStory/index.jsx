import React from "react";
import {
  Heading,
  Hiperlink,
  Image,
  AvatarImage,
  Column,
  Row,
  Text
} from "meganui";

export default class ImagesAndLinksStory extends React.Component {
  render() {
    return (
      <>
        <Heading level={1}>Images and hiperlinks</Heading>
        <Heading level={2}>Hiperlinks</Heading>
        <ul>
          <li>
            <Hiperlink itemProp="url" href="https://vulpi.com.br/">
              Hiperlink with <code>itemprop="url"</code>
            </Hiperlink>
          </li>
          <li>
            <Hiperlink to="https://vulpi.com.br" urlParams={{ key: "value" }}>
              Hiperlink with urlParams object
            </Hiperlink>
          </li>
          <li>
            <Hiperlink
              to="https://vulpi.com.br"
              utmCampaign="meganui-storybook"
              utmContent="Hiperlink with URL Campaign Builder params"
              utmMedium="hiperlink"
              utmSource="meganui"
            >
              Hiperlink with URL Campaign Builder params
            </Hiperlink>
          </li>
          <li>
            <Hiperlink button to="https://vulpi.com.br" utmCampaign="meganui-storybook" utmMedium="cta">
              Call to action with URL Campaign Builder params
            </Hiperlink>
          </li>
        </ul>
        <Heading level={2}>Images</Heading>
        <Row>
          <Column>
            <Text element="p">
              Image with support for <code>itemProp="logo"</code>
            </Text>
            <Image
              itemProp="logo"
              rel="home"
              src="https://avatars1.githubusercontent.com/u/17927497?s=200&v=4"
            />
          </Column>
          <Column>
            <Text element="p">Avatar image</Text>
            <AvatarImage src="https://avatars1.githubusercontent.com/u/17927497?s=200&v=4" />
          </Column>
        </Row>
      </>
    );
  }
}
