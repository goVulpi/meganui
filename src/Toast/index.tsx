import * as React from 'react';
import * as PropTypes from 'prop-types';
import styles from './index.scss';

export type Props = {
    color: string,
    close: boolean
};

export default class Toast extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    static propTypes = {
        color: PropTypes.oneOf(["primary", "brand", "secondary", "info", "danger", "dark", "success", "warning"]),
    };

    getClassNames() : string {
        const { color, close } = this.props;
        let classNames : string[] = [styles["toast"]];

        close ? classNames.push(styles["close"]) : Function.prototype();
        (typeof color === "string") ? classNames.push(styles[color]) : Function.prototype();

        return classNames.join(" ");
    }

    getProps() {
        return {
            "className": this.getClassNames(),
        };
    }

    render() {
        return (
            <div className={styles["wrapper"]}>
                <div {...this.getProps()}>
                    <span>
                        {this.props.children ? this.props.children : ''}
                    </span>
                    <button>Close</button>
                </div>
            </div>
        )
    }
}