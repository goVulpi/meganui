import React, {Component} from 'react';
import './index.scss';

export class Row extends Component {

    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }

}