/**
 * @class ClickableElement
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { colorPropValues, sizePropValues } from "../../constants";
import styles from './index.scss';

export interface ClickableElementProps {
    block: boolean,
    color: string,
    outlined: boolean,
    size: string
};

export interface ClickableElementAttributes {
    className: string,
    tabIndex: number
}

/**
 * @see https://stackoverflow.com/questions/39123667/react-typescript-extending-a-component-with-additional-properties
 */
export default class ClickableElement<T extends ClickableElementProps> extends React.PureComponent<T, {}> {
    
    constructor(props: T) {
        super(props);
    }

    protected static propTypes = {
        block: PropTypes.bool,
        color: PropTypes.oneOf(colorPropValues),
        onClick: PropTypes.func,
        outlined: PropTypes.bool,
        size: PropTypes.oneOf(sizePropValues)
    }

    protected getDefaultClassName() {
        return "";
    }

    protected getClassNames() : string {
        const {
            block,
            color,
            outlined,
            size
        } = this.props;

        let classNames : string[] = [];
        const defaultClassName = styles[this.getDefaultClassName()];
        classNames.push(defaultClassName);

        block ? classNames.push(styles["block"]) : Function.prototype();
        outlined ? classNames.push(styles["outlined"]) : Function.prototype();

        (typeof color === "string") ? classNames.push(styles[color]) : Function.prototype();
        (typeof size === "string") ? classNames.push(styles[size]) : Function.prototype();

        return classNames.join(" ");   
    }

    protected getAttributes() : ClickableElementAttributes {
        return {
            "className": this.getClassNames(),
            "tabIndex": 0
        };
    }    

}