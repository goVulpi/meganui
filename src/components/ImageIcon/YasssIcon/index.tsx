import * as React from "react";
import ImageIcon from "../index";
import yasssIconSVG from "./index.svg";

export default class YasssIcon extends React.PureComponent<any> {
  constructor(props: any) {
    super(props);
  }

  render() : JSX.Element {
    return <ImageIcon src={yasssIconSVG} {...this.props} />;
  }
}
