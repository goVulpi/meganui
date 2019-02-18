import * as React from "react";
import Option from "./Option";
import OptionGroup from "./OptionGroup";
import styles from "../TextInput/index.scss";

export type Props = {
  color?: string;
  defaultValue?: string | string[];
  hint?: string;
  id?: string;
  labelledBy?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: any;
  required?: boolean;
  requirementsText?: string;
  size?: string;
  value?: string | number | string[];
};

export { OptionGroup, Option };

export default class DropDownList extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  getClassNames() {
    const { color, size } = this.props;
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
      children,
      defaultValue,
      hint,
      id,
      labelledBy,
      onChange,
      options,
      required,
      requirementsText,
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
        title={requirementsText ? requirementsText : hint}
        value={value}
      >
        {hint && (
          <option disabled={true} selected={true} value="">
            {hint}
          </option>
        )}
        {options.length > 0 && options.map((option: any) => (
          <Option
            key={option.value}
            label={option.name}
            internalValue={option.value}
          />
        ))}
        {children}
      </select>
    );
  }
}
