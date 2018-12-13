import React, {Component} from 'react';
import './index.scss';

export class Fieldset extends Component {
    
    state = {
        loading: false
    };
    
    render() {
        return (
            <fieldset disabled={this.state.loading}>
                {this.props.children}
            </fieldset>
        );
    }

}