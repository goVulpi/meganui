/**
 * @class AppContainer
 */

import * as React from 'react';
import styles from './index.scss';

export type Props = {};

export default class AppContainer extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={styles["app-container"]}>{this.props.children ? this.props.children : ''}</div>
        )
    }
}