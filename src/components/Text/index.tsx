import * as React from "react";
import styles from "./index.scss";

export type Props = {
    color: string,
    element: string,
    size: string
};

export default class Text extends React.Component<Props> {

    getClassNames() : string {

        let classNames : string[] = [];
        const {color, size} = this.props;
        const colorPrefix : string = "text-";

        ("string" === typeof size) ? classNames.push(styles[size]) : Function.prototype();
        ("string" === typeof color) ? classNames.push(styles[colorPrefix.concat(color)]) : Function.prototype();

        return classNames.join(" ");

    }

    getTagName() : string {

        const defaultTagName : string = "span";
        const { element } = this.props;

        if ("string" !== typeof element) {
            return defaultTagName;
        }

        const elementsNameMap = {
            "inline": "span",
            "p": "p",
            "paragraph": "p",
            "small": "small",
            "smallprint": "small",
            "span": "span"
        };

        let tagName : string = elementsNameMap[element];

        if("string" !== typeof tagName) {
            return defaultTagName;
        }

        return tagName;

    }

    render() {

        const TagName : string = this.getTagName();

        return (
            <TagName className={this.getClassNames()}>{this.props.children}</TagName>
        );

    }

}