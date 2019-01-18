import * as React from "react";
import Heading from "../Heading";
import styles from "./index.scss";

export default class CardTitle extends React.PureComponent {
  render() {
    return (
      <Heading additionalClassNames={[styles["card-title"]]} itemProp="title">
        {this.props.children}
      </Heading>
    );
  }
}
