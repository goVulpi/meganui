import * as React from 'react';
import styles from './index.scss';

export type Props = {};

export default class MenuItem extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    getClassNames() {
        let classNames : string[] = [styles["menu-item"]];
        return classNames.join(" ");
    }

    render() {
        return (
            <li className={this.getClassNames()}>
                {this.props.children ? this.props.children : ''}
            </li>
        );
    }

}