import * as React from 'react';
import styles from './index.scss';

export type Props = {
    type: string
};

export default class Loading extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }
 
    getClassNames() {
        let classNames : string[] = [styles["loading"]];

        const {
            type,
        } = this.props;

        (typeof type === 'string') ? classNames.push(styles[type]) : Function.prototype();

        return classNames.join(" ");
    }

    render() {
        return (
            <span
                className={this.getClassNames()}
                tabIndex={-1}
            ></span>
        );
    }
}