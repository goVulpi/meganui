import * as React from "react";

export type OptionProps = {
  label: string;
  internalValue: string;
};

export default class Option extends React.PureComponent<OptionProps> {
  constructor(props: OptionProps) {
    super(props);
  }
  render() {
    const { label, internalValue } = this.props;
    return (
      <option title={label} value={internalValue}>
        {label}
      </option>
    );
  }
}
