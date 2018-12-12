import * as React from 'react';
import styles from './index.scss';

export type Props = {
    children: any,
    labelFor: string,
    id: string
};

export default class Label extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { children, labelFor, id } = this.props;

        return (
            <label id={id} className={styles.label} htmlFor={labelFor}>{children}<span hidden>:</span></label>
        );
    }

}