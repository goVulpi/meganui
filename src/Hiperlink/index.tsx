import * as React from 'react';
import styles from './index.scss';

export type Props = {
    href: string,
    target: string
}

export default class Hiperlink extends React.Component<Props> {

    render() {
        const { children, href, target } = this.props;
        return (
            <a className={styles["hiperlink"]} href={href} target={target}>{children}</a>
        );
    }

}