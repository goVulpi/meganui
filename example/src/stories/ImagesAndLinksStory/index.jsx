import React from "react";
import { Hiperlink, Image } from "meganui";

export default class ImagesAndLinksStory extends React.Component {
  render() {
    return (
      <>
        <Hiperlink itemProp="url" href="https://vulpi.com.br/">
          Hiperlink with <code>itemprop="url"</code>
        </Hiperlink>
        <Image itemProp="logo" rel="home"/>
      </>
    );
  }
}
