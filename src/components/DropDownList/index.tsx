import * as React from "react";
import styles from "../TextInput/index.scss";

export type Props = {
  defaultValue?: string | string[];
  hint?: string;
  id?: string;
  labelledBy?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: any;
  required?: boolean;
  value?: string | number | string[];
};

export default class DropDownList extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  renderOption(name: string, value: string) {
    return (
      <option title={name} value={value}>
        {name}
      </option>
    );
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
        className={styles["text-input"]}
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
        {options.map((option: any) => (
          <React.Fragment key={option.value}>
            {this.renderOption(option.name, option.value)}
          </React.Fragment>
        ))}
      </select>
    );
  }
}
