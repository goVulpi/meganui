/**
 * @class Hiperlink
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import ClickableElement, { ClickableElementAttributes, ClickableElementProps } from "../ClickableElement";

export interface HiperlinkProps extends ClickableElementProps {
    button: boolean,
    href: string,
    onClick: ((event: React.MouseEvent<HTMLAnchorElement>) => void) | undefined,
    target: string
}

export interface HiperlinkAttributes extends ClickableElementAttributes {
    href: string,
    target: string
}

export default class Hiperlink extends ClickableElement<HiperlinkProps> {

    constructor(props: HiperlinkProps) {
        super(props);
    }

    static propTypes = Object.assign(ClickableElement.propTypes, {
        "button": PropTypes.bool,
        "href": PropTypes.string,
        "target": PropTypes.string
    });

    protected getDefaultClassName() : string {
        return (true === this.props.button) ? "button" : "hiperlink";
    } 

    protected getAttributes() : HiperlinkAttributes {
        const { href, target } = this.props;

        return Object.assign(super.getAttributes(), {
           "href":  href,
           "target": target
        });
    }   

    render() {
        const { children, onClick } = this.props;
        return (
            <a {...this.getAttributes()}
                onClick={onClick}>
                {children ? children : ''}
            </a>
        );
    }

}