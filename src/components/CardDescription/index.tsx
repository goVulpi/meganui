import * as React from "react";
import styles from "./index.scss";

export default class CardDescription extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className={styles["card-description"]} itemProp="description">
        {children}
      </div>
    );
  }
}
