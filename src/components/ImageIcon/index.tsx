import * as React from "react";
import styles from "./index.scss";

export type ImageIconProps = {
  children?: any;
  decorative?: boolean;
  id?: string;
  src: string;
  tooltipText?: string;
};

export default class ImageIcon extends React.PureComponent<ImageIconProps> {
  constructor(props: ImageIconProps) {
    super(props);
  }

  render() {
    const { children, decorative, id, src, tooltipText } = this.props;
    const labelId = `${id}Label`;
    return (
      <React.Fragment>
        <img
          aria-hidden={decorative ? "true" : "false"}
          aria-labelledBy={id ? labelId : undefined}
          id={id ? id : undefined}
          role={decorative ? "presentation" : "img"}
          src={src}
          tabIndex={-1}
          title={decorative ? undefined : tooltipText}
        />
        <span className={styles["sr-only"]} id={id ? labelId : undefined}>
          {children ? children : tooltipText}
        </span>
      </React.Fragment>
    );
  }
}
