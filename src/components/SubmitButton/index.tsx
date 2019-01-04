import Button, { ButtonAttributes, ButtonProps } from "../Button";

export default class SubmitButton extends Button {

    constructor(props: ButtonProps) {
        super(props);
    }

    protected getAttributes() : ButtonAttributes {
        return Object.assign(super.getAttributes(), {
            "type": "submit"
        });
    }

}