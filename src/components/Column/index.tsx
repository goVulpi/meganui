import * as React from 'react';
import styles from './index.scss';

export default class Column extends React.Component {

    render() {
        return (
            <div className={styles.column}>
                {this.props.children}
            </div>
        );
    }

}