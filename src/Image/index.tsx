import * as React from 'react';
import styles from './index.scss';

export type Props = {
    alt: string,
    fluid: boolean,
    height: string,
    size: string,
    src: string,
    thumbnail: boolean,
    width: string
};

export default class Image extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }
 
    getClassNames() {
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

    render() {
        const { alt, src, height, width } = this.props;
        return (
            <img className={this.getClassNames()} src={src} alt={alt} height={height} width={width}/>
        );
    }

}