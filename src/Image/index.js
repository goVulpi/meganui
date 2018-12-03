import React, {Component} from 'react';
import './index.scss';

export class Image extends Component {

    getClassNames() {
        let classNames = ["image"];

        this.props.fluid ? classNames.push("fluid") : Function.prototype();
        this.props.thumbnail ? classNames.push("thumbnail") : Function.prototype();
        (typeof this.props.size === 'string') ? classNames.push(this.props.size) : Function.prototype();

        return classNames.join(" ");
    }

    render() {
        return (
            <img className={this.getClassNames()} src={this.props.src} alt={this.props.alt}/>
        );
    }

}