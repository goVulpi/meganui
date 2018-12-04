/**
 * @class Button
 */

import * as React from 'react';
import * as PropTypes from 'prop-types'
import styles from './index.scss';

export type Props = {
    block: boolean,
    color: string,
    outlined: boolean,
    size: string
};

export default class Button extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    static propTypes = {
        block: PropTypes.bool,
        color: PropTypes.oneOf(["primary", "primary-variant", "secondary", "info", "danger", "dark", "success", "warning"]),
        outlined: PropTypes.bool,
        size: PropTypes.oneOf(["big", "bigger", "biggest"])
    };

    getClassNames() : string {
        const { block, color, outlined, size } = this.props;
        let classNames : string[] = [styles["button"]];

        block ? classNames.push(styles["block"]) : Function.prototype();
        outlined ? classNames.push(styles["outlined"]) : Function.prototype();
        (typeof color === "string") ? classNames.push(styles[color]) : Function.prototype();
        (typeof size === "string") ? classNames.push(styles[size]) : Function.prototype();

        return classNames.join(" ");
    }

    render() {
        return (
        <button className={this.getClassNames()} tabIndex={0}>
            {this.props.children ? this.props.children : ''}
        </button>
        )
    }
}