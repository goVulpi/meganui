import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export class Heading extends Component {
    render() {
        const level = this.props.level ? this.props.level : '1';

        /**
         * In React, names starting with a capital letter will compile to the createComponent method.
         */
        const TagName = `h${level}`;
        
        return (<TagName>{this.props.children}</TagName>);
    }

};

Heading.displayName = "Heading";

Heading.defaultProps = {
    level: 1
};

Heading.propTypes = {
    level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
};