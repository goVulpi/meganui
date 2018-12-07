import React, {Component} from 'react';
import './index.scss';

export class Footer extends Component {

    render() {
        return (
            <div className="footer">
                {this.props.children}
            </div>
        );
    }

}