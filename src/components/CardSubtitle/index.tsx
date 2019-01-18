import * as React from "react";
import styles from "./index.scss";

export default class CardSubtitle extends React.PureComponent {

    render() {
        return (
            <div className={styles["card-subtitle"]}>
                {this.props.children}
            </div>
        );
    }

} 