import * as React from "react";
import styles from "./index.scss";

export type Props = {};

export default class BigFooter extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return <footer className={styles["big-footer"]}>{children}</footer>;
  }
}
