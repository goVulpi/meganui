import * as React from 'react';
import * as PropTypes from 'prop-types';
import styles from './index.scss';
import { colorPropValues } from '../constants';

export type Props = {
    color: string,
    position: string
};

export default class Navbar extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }
    
    static propTypes = {
        color: PropTypes.oneOf(colorPropValues),
    };
 
    getClassNames() {
        let classNames : string[] = [styles["navbar"]];

        const {
            color,
            position
        } = this.props;

        (typeof position === 'string') ? classNames.push(styles[position]) : Function.prototype();
        (typeof color === "string") ? classNames.push(styles[color]) : Function.prototype();

        return classNames.join(" ");
    }

    render() {
        return (
            <nav className={this.getClassNames()}>
                {this.props.children}
            </nav>
        );
    }
}