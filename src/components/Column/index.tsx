import * as React from 'react';
import styles from './index.scss';

export type Props = {
    horizontalGapSize?: string
}

export default class Column extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    getClassNames() : string {
        const { horizontalGapSize } = this.props;
        let classNames : string[] = [styles.column];
        if(horizontalGapSize) {
            const className = `${horizontalGapSize}-horizontal-gap`;
            classNames.push(styles[className]);
        }
        return classNames.join(" ");
    }

    render() {
        return (
            <div className={this.getClassNames()}>
                {this.props.children}
            </div>
        );
    }

}