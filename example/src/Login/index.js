import React, {Component} from 'react';
import './index.scss';

export class Login extends Component {

    render() {
        return (
            <div className="login">
                {this.props.children}
            </div>
        );
    }

}