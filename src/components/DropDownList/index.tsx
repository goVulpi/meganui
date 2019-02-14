import * as React from "react";
import styles from "../TextInput/index.scss";

export type Props = {
  color?: string,
  defaultValue?: string | string[];
  hint?: string;
  id?: string;
  labelledBy?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: any;
  required?: boolean;
  size?: string,
  value?: string | number | string[];
};

export default class DropDownList extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  renderOption(name: string, value: string) {
    return (
      <option key={value} title={name} value={value}>
        {name}
      </option>
    );
  }

  getClassNames() {
    const {color, size} = this.props;
    let classNames: string[] = [styles["text-input"]];

    typeof color === "string"
      ? classNames.push(styles[color])
      : Function.prototype();
    typeof size === "string"
      ? classNames.push(styles[size])
      : Function.prototype();

    return classNames.join(" ");
  }

  render() {
    const {
      defaultValue,
      hint,
      id,
      labelledBy,
      onChange,
      options,
      required,
      value
    } = this.props;
    return (
      <select
        aria-labelledby={labelledBy}
        aria-required={required}
        className={this.getClassNames()}
        defaultValue={defaultValue}
        onChange={onChange}
        id={id}
        name={id}
        required={required}
        title={hint}
        value={value}
      >
        {hint && (
          <option disabled value="">
            {hint}
          </option>
        )}
        {options.map((option: any) =>
          this.renderOption(option.name, option.value)
        )}
      </select>
    );
  }
}
