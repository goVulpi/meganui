import * as React from "react";
import ImageIcon from "../index";
import noIconSVG from "./index.svg";

export default class NoIcon extends React.PureComponent<any> {
  constructor(props: any) {
    super(props);
  }
  render(): JSX.Element {
    return <ImageIcon src={noIconSVG} {...this.props} />;
  }
}
