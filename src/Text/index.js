import React, {Component} from 'react';
import './index.scss';

export class Text extends Component {

    getClassNames() {
        let classNames = [];
        let {color, size} = this.props;
        const colorPrefix = "text-";

        ("string" === typeof size) ? classNames.push(size) : Function.prototype();
        ("string" === typeof color) ? classNames.push(colorPrefix.concat(color)) : Function.prototype();
    
        return classNames.join(" ");
    };

    getTagName() {
        let defaultTagName = "span";
        let { element } = this.props;
        
        if("string" !== typeof element) {
            return defaultTagName;
        }
    
        const elementNamesMap = {
            "inline": "span",
            "p": "p",
            "paragraph": "p",
            "small": "small",
            "smallprint": "small",
            "span": "span"
        };

        let tagName = elementNamesMap[element];

        if("string" !== typeof tagName) {
            return defaultTagName;
        }

        return tagName;
    }

    render() {

        const TagName = this.getTagName();

        return (
            <TagName className={this.getClassNames()}>{this.props.children}</TagName>
        );
    }

}