import * as React from 'react';

export type Props = {
    fieldId: string,
    labelledBy: string,
    hint: string,
    id: string,
    required: boolean,
    requirementsText: string
};

export default class EmailInput extends React.Component<Props> {

    render() {
        const { hint, id, labelledBy, required, requirementsText } = this.props;
        return (
            <input id={id} name={id}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                aria-labelledby={labelledBy}
                aria-required={required}
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