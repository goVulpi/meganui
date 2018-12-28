import TextInput, { Props } from '../TextInput';

export default class EmailInput extends TextInput {

    constructor(props: Props) {
        super(props);
    }

    getProps() {
        return Object.assign(super.getProps(), {
            "autoCapitalize": "none",
            "autoComplete": "email",
            "autoCorrect": "off",
            "inputMode": "email",
            "maxLength": 254,
            "minLength": 3,
            "multiple": false,
            "pattern": "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
            "spellCheck": false,
            "type": "email",
            "x-inputmode": "email"
        });
    }

}