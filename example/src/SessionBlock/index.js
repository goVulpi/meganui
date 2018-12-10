import React, {Component} from 'react';
import './index.scss';

export class SessionBlock extends Component {

    render() {
        return (
            <div className="session-block">
                {this.props.children}
            </div>
        );
    }

}