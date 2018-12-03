import React, {Component} from 'react';
import './index.scss';

export class TextInput extends Component {

    getClassNames() {
        let classNames = ["text-input"];

        (typeof this.props.color === 'string') ? classNames.push(this.props.color) : Function.prototype();
        (typeof this.props.size === 'string') ? classNames.push(this.props.size) : Function.prototype();
        
        return classNames.join(" ");
    }

    render() {
        return (
            <input placeholder={this.props.placeholder} className={this.getClassNames()} type="text"></input>
        );
    }

}