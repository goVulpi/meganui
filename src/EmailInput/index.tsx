import * as React from 'react';
import styles from './index.scss';

export type Props = {
    color: string,
    fieldId: string,
    labelledBy: string,
    hint: string,
    id: string,
    required: boolean,
    requirementsText: string,
    size: string
};

export default class EmailInput extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    getClassNames() : string {
        const { color, size } = this.props;
        let classNames : string[] = [styles["email-input"]];

        (typeof color === "string") ? classNames.push(styles[color]) : Function.prototype();
        (typeof size === "string") ? classNames.push(styles[size]) : Function.prototype();

        return classNames.join(" ");
    }

    render() {
        const { hint, id, labelledBy, required, requirementsText } = this.props;
        return (
            <input id={id} name={id}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                aria-labelledby={labelledBy}
                aria-required={required}
                className={this.getClassNames()}
                maxLength={254}
                minLength={3}
                multiple={false}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder={hint}
                required={required}
                spellCheck={false}
                tabIndex={0}
                title={requirementsText}
                type="email" />
        );
    }

}