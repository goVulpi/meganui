/**
 * @class Button
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import ClickableElement, { ClickableElementAttributes, ClickableElementProps } from "../ClickableElement";

export interface ButtonProps extends ClickableElementProps {
    disabled: boolean,
    type: string
};

export interface ButtonAttributes extends ClickableElementAttributes {
    disabled: boolean,
    type: string
}

export default class Button extends ClickableElement<ButtonProps> {

    constructor(props: ButtonProps) {
        super(props);
    }

    static propTypes = Object.assign(ClickableElement.propTypes, {
        disabled: PropTypes.bool
    });

    protected getDefaultClassName() {
        return "button";
    }

    protected getAttributes() : ButtonAttributes {
        const { disabled } = this.props;

        return Object.assign(super.getAttributes(), {
            "disabled": disabled,
            "type": "button"
        });
    }

    render() {
        const { onClick } = this.props;
        return (
        <button {...this.getAttributes()} onClick={onClick}>
            {this.props.children ? this.props.children : ''}
        </button>
        )
    }

}
