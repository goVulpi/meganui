import * as React from "react";
import Hiperlink from "../Hiperlink";
import styles from "./index.scss";

export default class FooterNavLink extends React.PureComponent<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { tooltipText } = this.props;
    return (
      <li className={styles["footer-nav-list-item"]} itemProp="name">
        <Hiperlink itemProp="url" tooltipText={tooltipText} {...this.props}>
        {this.props.children}
        </Hiperlink>
      </li>
    );
  }
}
