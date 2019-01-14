import * as React from 'react';
import styles from './index.scss';

export default class Row extends React.Component {

    render() {
        return (
            <div className={styles.row}>
                {this.props.children}
            </div>
        );
    }

}