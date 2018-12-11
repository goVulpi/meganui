import React, {Component} from 'react';
import './index.scss';

export class WelcomeMessage extends Component {

    render() {
        return (
            <div className="megan">
                {this.props.children}
            </div>
        );
    }

}