import * as React from "react";
import styles from "./index.scss";

export default class FooterNavTitle extends React.PureComponent {
    render() {
        return (
            <li className={styles["footer-nav-title"]}>
                {this.props.children}
            </li>
        );
    }
}