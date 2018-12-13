import * as React from 'react';
import * as PropTypes from 'prop-types';
import styles from './index.scss';

export type Props = {
    color: string
};

export default class Toast extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    static propTypes = {
        color: PropTypes.oneOf(["primary", "brand", "secondary", "info", "danger", "dark", "success", "warning"]),
    };

    getClassNames() : string {
        const { color } = this.props;
        let classNames : string[] = [styles["toast"]];

        (typeof color === "string") ? classNames.push(styles[color]) : Function.prototype();

        return classNames.join(" ");
    }

    getProps() {
        return {
            "className": this.getClassNames(),
        };
    }

    render() {
        return (
            <div {...this.getProps()}>
                {this.props.children ? this.props.children : ''}
                <a href="#">Close</a>
            </div>
        )
    }
}