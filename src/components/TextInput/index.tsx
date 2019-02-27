import * as React from "react";
import styles from "./index.scss";

export type Props = {
  color?: string;
  disabled?: boolean;
  hint: string;
  id: string;
  labelledBy: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  required?: boolean;
  requirementsText?: string;
  suggestedOptions?: string[];
  size?: string;
  value?: string;
};

export default class TextInput extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  getClassNames(): string {
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

  getProps(): any {
    const {
      disabled,
      hint,
      id,
      labelledBy,
      required,
      requirementsText,
      suggestedOptions
    } = this.props;
    return {
      id: id,
      name: id,
      "aria-labelledby": labelledBy,
      className: this.getClassNames(),
      disabled: disabled,
      list: suggestedOptions ? `${id}List` : null,
      placeholder: hint,
      required: required,
      tabIndex: 0,
      title: requirementsText,
      type: "text"
    };
  }

  renderMultiline() {
    const { onBlur, onChange, value } = this.props;
    return (
      <textarea onBlur={onBlur} onChange={onChange} {...this.getProps()}>
        {value}
      </textarea>
    );
  }

  renderOptions() {
    const { id, suggestedOptions } = this.props;
    if ("undefined" === typeof suggestedOptions) {
      return false;
    }
    return (
      <datalist id={`${id}List`}>
        {suggestedOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </datalist>
    );
  }

  renderSingleLine() {
    const { onBlur, onChange, suggestedOptions, value } = this.props;
    return (
      <React.Fragment>
        <input
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          {...this.getProps()}
        />
        {suggestedOptions && this.renderOptions()}
      </React.Fragment>
    );
  }

  render() {
    const { multiline } = this.props;
    return multiline === true
      ? this.renderMultiline()
      : this.renderSingleLine();
  }
}
