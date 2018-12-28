/**
 * @class Spacing
 */
import * as React from 'react';
import * as PropTypes from 'prop-types'
import styles from './index.scss';

export type Props = {
    position: string,
    size: string
};

export default class Spacing extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    static propTypes = {
        size: PropTypes.oneOf(["big", "bigger", "biggest"]),
        position: PropTypes.oneOf(["top", "right", "bottom", "left"])
    };

    getClassNames() : string {
        const { position, size } = this.props;
        let classNames : string[] = [styles["spacing"]];
        
        (typeof position === "string") ? classNames.push(styles[position]) : Function.prototype();
        (typeof size === "string") ? classNames.push(styles[size]) : Function.prototype();

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