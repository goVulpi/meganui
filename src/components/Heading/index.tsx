import * as React from "react";
import styles from "./index.scss";

export type Props = {
  additionalClassNames?: string[];
  color?: string;
  itemProp?: string;
  level?: number;
  size?: string;
};

export default class Heading extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  getClassNames(): string {
    const { additionalClassNames, color, size } = this.props;
    let classNames: string[] = additionalClassNames ? additionalClassNames : [];
    const colorPrefix: string = "text-";

    "string" === typeof color
      ? classNames.push(styles[colorPrefix.concat(color)])
      : Function.prototype();
    "string" === typeof size
      ? classNames.push(styles[size])
      : Function.prototype();

    return classNames.join(" ");
  }

  getAttributes() {
      const { itemProp } = this.props;
      return {
          className: this.getClassNames(),
          itemProp: itemProp
      }
  }

  render() {
    const { level } = this.props;
    const levelNumber: number = level ? level : 1;

    /**
     * In React, names starting with a capital letter will compile to the createComponent method.
     */
    const TagName: string = `h${levelNumber}`;

    return (
      <TagName {...this.getAttributes()}>
        {this.props.children ? this.props.children : ""}
      </TagName>
    );
  }

  static defaultProps = {
    level: 1
  };

  static displayName = "Heading";
}
