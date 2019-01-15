import * as React from "react";
import Hiperlink from "../Hiperlink";
import styles from "./index.scss";

export type Props = {
  href: string;
};

export default class FooterNavLink extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { href } = this.props;
    return (
      <li className={styles["footer-nav-list-item"]} itemProp="name">
        <Hiperlink href={href} itemProp="url">
        {this.props.children}
        </Hiperlink>
      </li>
    );
  }
}
