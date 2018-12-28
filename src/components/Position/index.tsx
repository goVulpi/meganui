import * as React from 'react';
import * as PropTypes from 'prop-types'
import styles from './index.scss';

export type Props = {
    left: boolean,
    center: boolean,
    right: boolean
};

export default class Position extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    static propTypes = {
        left: PropTypes.bool,
        center: PropTypes.bool,
        right: PropTypes.bool
    };

    getClassNames() : string {
        const { left, center, right } = this.props;
        let classNames : string[] = [styles["block"]];

        left ? classNames.push(styles["left"]) : Function.prototype();
        center ? classNames.push(styles["center"]) : Function.prototype();
        right ? classNames.push(styles["right"]) : Function.prototype();

        return classNames.join(" ");
    }

    render() {
        return (
            <div className={this.getClassNames()}>
                {this.props.children ? this.props.children : ''}
            </div>
        )
    }
}