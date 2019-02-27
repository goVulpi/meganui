import * as React from "react";
import ImageIcon from "../index";
import yesIconSVG from "./index.svg";

export default class YesIcon extends React.PureComponent<any> {
  constructor(props: any) {
    super(props);
  }
  render(): JSX.Element {
    return <ImageIcon src={yesIconSVG} {...this.props} />;
  }
}
