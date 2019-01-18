import * as React from "react";
import Image, { Props } from "../Image";
import styles from "./index.scss";

export default class AvatarImage extends React.PureComponent<Props> {
  /**
   * @see https://www.pluralsight.com/blog/creative-professional/whats-difference-image-figure-tags-html5
   */
  render() {
    return (
      <figure>
        <div className={styles["avatar-container"]}>
          <Image {...this.props} />
        </div>
        <figcaption>{this.props.children}</figcaption>
      </figure>
    );
  }
}
