import TextInput, { Props } from "../TextInput";

export default class TelInput extends TextInput {

    constructor(props: Props) {
        super(props);
    }

    getProps() {
        return Object.assign(super.getProps(), {
            "autoCapitalize": "none",
            "autoComplete": "tel-national",
            "autoCorrect": "off",
            "inputMode": "tel",
            "maxLength": 15,
            "minLength": 4,
            "spellCheck": false,
            "type": "tel",
            "x-inputmode": "tel"
        });
    }

}