import Button, { Props } from "../Button";

export default class SubmitButton extends Button {

    constructor(props: Props) {
        super(props);
    }

    getProps() {
        return Object.assign(super.getProps(), {
            "type": "submit"
        });
    }

}