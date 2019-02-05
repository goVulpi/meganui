import * as React from 'react';
import styles from './index.scss';

export type Props = {
    alt: string,
    fluid: boolean,
    height: string,
    itemProp: string,
    size: string,
    src: string,
    thumbnail: boolean,
    width: string
};

export default class Image extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }
 
    getClassNames() : string {
        let classNames : string[] = [styles["image"]];

        const {
            fluid,
            size,
            thumbnail
        } = this.props;

        fluid ? classNames.push(styles["fluid"]) : Function.prototype();
        thumbnail ? classNames.push(styles["thumbnail"]) : Function.prototype();
        (typeof size === 'string') ? classNames.push(styles[size]) : Function.prototype();

        return classNames.join(" ");
    }

    getAttributes() {
        const { alt, height, itemProp, src, width } = this.props;
        return {
            alt: alt,
            className: this.getClassNames(),
            draggable: false,
            height: height,
            itemProp: "string" === typeof itemProp ? itemProp : 'image',
            src: src,
            tabIndex: -1,
            width: width,
        };
    }

    render() : JSX.Element {
        return (
            <img {...this.getAttributes()} />
        );
    }

}