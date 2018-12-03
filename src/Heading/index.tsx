import * as React from 'react';
import './index.scss';

export type Props = {
    level: number
};

export default class Heading extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    render() {
        const { level } = this.props;
        const levelNumber : number = level ? level : 1;

        /**
         * In React, names starting with a capital letter will compile to the createComponent method.
         */
        const TagName : string = `h${levelNumber}`;

        return (<TagName>{this.props.children ? this.props.children : ''}</TagName>);
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
