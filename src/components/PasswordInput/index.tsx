import TextInput, { Props } from '../TextInput';

export default class PasswordInput extends TextInput {

    constructor(props: Props) {
        super(props);
    }

    getProps() {
        return Object.assign(super.getProps(), {
            "autoCapitalize": "none",
            "autoComplete": "current-password",
            "autoCorrect": "off",
            "maxLength": 50,
            "minLength": 8,
            "spellCheck": false,
            "type": "password"
        });
    }
}