import React, {Component} from 'react';
import './index.scss';

export class LabelPassword extends Component {

    render() {
        return (
            <div className="label-password">
                {this.props.children}
            </div>
        );
    }

}