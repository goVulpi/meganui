import * as React from "react";
import styles from "./index.scss";

export default class FooterNavMenu extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <nav>
        <ul
          className={styles["footer-nav-menu"]}
          itemScope
          itemType="http://www.schema.org/SiteNavigationElement"
        >
          {children}
        </ul>
      </nav>
    );
  }
}
