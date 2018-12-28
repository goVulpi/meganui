import * as React from 'react';
import styles from './index.scss';

export type Props = {
    pull: string
};

export default class MenuList extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }
 
    getClassNames() {
        let classNames : string[] = [styles["menu-list"]];

        const { pull } = this.props;

        (typeof pull === 'string') ? classNames.push(styles[pull]) : Function.prototype();

        return classNames.join(" ");
    }

    render() {
        return (
            <ul className={this.getClassNames()}>
                {this.props.children}
            </ul>
        );
    }
}