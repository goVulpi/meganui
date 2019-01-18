import * as React from "react";
import styles from "./index.scss";

export type Props = {
  centeredContent?: boolean;
  interactive?: boolean;
  verticalSpace?: string;
};

export default class Card extends React.PureComponent<Props> {
  getClassNames(): string {
    const { centeredContent, interactive, verticalSpace } = this.props;
    let classNames = [styles.card];
    centeredContent === true
      ? classNames.push(styles["centered"])
      : Function.prototype();
    interactive === true
      ? classNames.push(styles["interactive-card"])
      : Function.prototype();
    if ("undefined" !== typeof verticalSpace) {
      const className = `${
        verticalSpace.length > 0 ? verticalSpace : "small"
      }-vertical-space`;
      classNames.push(styles[className]);
    }
    return classNames.join(" ");
  }

  /**
   * @see https://inclusive-components.design/cards/
   */
  render(): JSX.Element {
    return (
      <div className={this.getClassNames()}>
        <div className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}
