/**
 * @class Button
 */

import * as React from 'react';

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

    getClassNames() : string {
        const { block, color, outlined, size } = this.props;
        let classNames : string[] = ["button"];

        block ? classNames.push("block") : Function.prototype();
        outlined ? classNames.push("outlined") : Function.prototype();
        (typeof color === "string") ? classNames.push(color) : Function.prototype();
        (typeof size === "string") ? classNames.push(size) : Function.prototype();

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