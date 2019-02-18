import * as React from "react";

export type OptionGroupProps = {
  children: string;
  label: string;
};

export default class OptionGroup extends React.PureComponent<OptionGroupProps> {
  constructor(props: OptionGroupProps) {
    super(props);
  }
  render() {
    const { children, label } = this.props;
    return <optgroup label={label}>{children}</optgroup>;
  }
}
