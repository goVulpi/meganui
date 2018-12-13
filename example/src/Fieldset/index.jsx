import React, {Component} from 'react';
import './index.scss';

export class Fieldset extends Component {
    
    render() {
        const { disabled } = this.props;
        return (
            <fieldset disabled={disabled}>
                {this.props.children}
            </fieldset>
        );
    }

}