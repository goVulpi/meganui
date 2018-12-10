import React, {Component} from 'react';
import './index.scss';

export class Footer extends Component {

    render() {
        return (
            <footer className="session-block-footer">
                {this.props.children}
            </footer>
        );
    }

}