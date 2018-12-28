import * as React from 'react';
import * as PropTypes from 'prop-types';
import styles from './index.scss';
import { colorPropValues } from '../../constants';

export type Props = {
    closeButtonContent: string,
    closeButtonLabel: string,
    color: string,
    id: string,
    onCloseButtonClick: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined,
    open: boolean
};

export default class Toast extends React.Component<Props> {

    private toastRef = React.createRef<HTMLDivElement>();

    constructor(props: Props) {
        super(props);
    }

    static propTypes = {
        color: PropTypes.oneOf(colorPropValues),
    };

    /**
     * @see https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315
     */
    componentDidUpdate() {
        if(this.props.open) {
            const node = this.toastRef.current;
            node ? node.focus() : Function.prototype();
        }
    }

    getClassNames() : string {
        const { color, open } = this.props;
        let classNames : string[] = [styles["toast"]];

        open ? classNames.push(styles["open"]) : Function.prototype();
        (typeof color === "string") ? classNames.push(styles[color]) : Function.prototype();

        return classNames.join(" ");
    }

    getToastProps() {
        const { id } = this.props;
        return {
            "id": id,
            "className": this.getClassNames(),
            "role": "alert",
            "tabIndex": 0
        };
    }

    getCloseButtonProps() {
        const { closeButtonLabel, id, onCloseButtonClick } = this.props;
        return {
            "id": id.concat("CloseButton"),
            "onClick": onCloseButtonClick,
            "tabIndex": 0,
            "title": closeButtonLabel,
            "type": "button"
        };
    }

    render() {
        const { closeButtonContent, closeButtonLabel, id } = this.props;
        return (
            <div className={styles["wrapper"]}>
                <div aria-live="assertive" {...this.getToastProps()} ref={this.toastRef}>
                    <span>{this.props.children ? this.props.children : ""}</span>
                    <button
                        {...this.getCloseButtonProps()}
                        aria-controls={id}
                        aria-label={closeButtonLabel}
                        >
                        {closeButtonContent}
                    </button>
                </div>
            </div>
        )
    }
}