import TextInput, { Props } from '../TextInput';

export default class NameInput extends TextInput {

    constructor(props: Props) {
        super(props);
    }

    getProps() {
        return Object.assign(super.getProps(), {
            "autoCapitalize": "words",
            "autoComplete": "name",
            "autoCorrect": "off",
            "inputMode": "latin-name",
            "maxLength": 255,
            "minLength": 6,
            "spellCheck": true
        });
    }

}