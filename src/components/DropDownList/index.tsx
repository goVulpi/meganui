import * as React from "react";
import styles from "../TextInput/index.scss";

export type Props = {
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
      <option key={value} title={name} value={value}>
        {name}
      </option>
    );
  }

  render() {
    const {
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
        aria-labelledBy={labelledBy}
        aria-required={required}
        className={styles["text-input"]}
        onChange={onChange}
        id={id}
        name={id}
        required={required}
        title={hint}
        value={value}
      >
      {hint && <option disabled selected value="">{hint}</option>}
        {options.map((option: any) =>
          this.renderOption(option.name, option.value)
        )}
      </select>
    );
  }
}
