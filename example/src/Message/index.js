import React, {Component} from 'react';
import './index.scss';
import { Image } from 'meganui';

export class Message extends Component {

    render() {
        return (
            <div className="megan">
                <div className="message">
                    {this.props.children}
                </div>
                <div className="wave"></div>
                <Image height="64px" src="logotype-white.png"/>
            </div>
        );
    }

}