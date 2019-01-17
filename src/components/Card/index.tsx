import * as React from "react";
import styles from "./index.scss";
import Heading from "../Heading";

export type Props = { title?: string };

export default class Card extends React.PureComponent<Props> {
  render() {
    const { title } = this.props;
    return (
      <div className={styles.card}>
        {title && <Heading itemProp="title">{title}</Heading>}
        <div className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}
