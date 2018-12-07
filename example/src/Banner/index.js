import React, {Component} from 'react';
import './index.scss';

export class Banner extends Component {

    render() {
        return (
            <div className="banner">
                {this.props.children}
            </div>
        );
    }

}