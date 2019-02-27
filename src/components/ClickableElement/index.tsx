/**
 * @class ClickableElement
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { colorPropValues, sizePropValues } from "../../constants";
import styles from "./index.scss";

export interface ClickableElementProps {
  ariaLabel?: string;
  block?: boolean;
  circular?: boolean;
  color?: string;
  outlined?: boolean;
  size?: string;
  tooltipText: string;
}

export interface ClickableElementAttributes {
  "aria-label"?: string;
  className?: string;
  tabIndex: number;
  title: string;
}

/**
 * @see https://stackoverflow.com/questions/39123667/react-typescript-extending-a-component-with-additional-properties
 */
export default class ClickableElement<
  T extends ClickableElementProps
> extends React.PureComponent<T, {}> {
  constructor(props: T) {
    super(props);
  }

  protected static propTypes = {
    ariaLabel: PropTypes.string,
    block: PropTypes.bool,
    color: PropTypes.oneOf(colorPropValues),
    extraInfo: PropTypes.string,
    onClick: PropTypes.func,
    outlined: PropTypes.bool,
    size: PropTypes.oneOf(sizePropValues),
    tooltipText: PropTypes.string.isRequired
  };

  protected getDefaultClassName() {
    return "";
  }

  protected getClassNames(): string {
    const { block, color, circular, outlined, size } = this.props;

    let classNames: string[] = [];
    const defaultClassName = styles[this.getDefaultClassName()];
    classNames.push(defaultClassName);

    block ? classNames.push(styles["block"]) : Function.prototype();
    circular ? classNames.push(styles["circular"]) : Function.prototype();
    outlined ? classNames.push(styles["outlined"]) : Function.prototype();

    typeof color === "string"
      ? classNames.push(styles[color])
      : Function.prototype();
    typeof size === "string"
      ? classNames.push(styles[size])
      : Function.prototype();

    return classNames.join(" ");
  }

  protected getAttributes(): ClickableElementAttributes {
    const { ariaLabel, tooltipText } = this.props;
    return {
      "aria-label": ariaLabel,
      className: this.getClassNames(),
      tabIndex: 0,
      title: tooltipText
    };
  }
}
