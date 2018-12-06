import * as React from 'react';
import styles from './index.scss';

export type Props = {
    color: string,
    hint: string,
    size: string
};

export default class TextInput extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    getClassNames() : string {
        const { color, size } = this.props;
        let classNames : string[] = [styles["text-input"]];

        (typeof color === "string") ? classNames.push(styles[color]) : Function.prototype();
        (typeof size === "string") ? classNames.push(styles[size]) : Function.prototype();

        return classNames.join(" ");
    }

    render() {
        const { hint } = this.props;
        return (
            <input className={this.getClassNames()} placeholder={hint} type="text" />
        );
    }

}