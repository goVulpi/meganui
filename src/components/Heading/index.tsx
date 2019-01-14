import * as React from 'react';
import styles from "./index.scss";

export type Props = {
    color: string,    
    level: number,
    size: string
};

export default class Heading extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    getClassNames() : string {

        let classNames : string[] = [];
        const {
            color,
            size
        } = this.props;
        const colorPrefix : string = "text-";

        ("string" === typeof color) ? classNames.push(styles[colorPrefix.concat(color)]) : Function.prototype();
        ("string" === typeof size) ? classNames.push(styles[size]) : Function.prototype();

        return classNames.join(" ");

    }

    render() {
        const { level } = this.props;
        const levelNumber : number = level ? level : 1;

        /**
         * In React, names starting with a capital letter will compile to the createComponent method.
         */
        const TagName : string = `h${levelNumber}`;

        return (<TagName className={this.getClassNames()}>{this.props.children ? this.props.children : ''}</TagName>);
    }

}

/*
TODO: bring it back to Component

Heading.displayName = "Heading";

Heading.defaultProps = {
    level: 1
};

Heading.propTypes = {
    level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
};

*/
