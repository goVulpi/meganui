import * as React from 'react';
import styles from './index.scss';
import { sizePropValues } from '../constants';

export type Props = {
    id: string,
    onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void),
    labelledBy: string,
    required: boolean,
    requirementsText: string,
    size: string
};

export default class TextInput extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    getClassNames() : string {
        const { size } = this.props;
        let classNames : string[] = [styles["text-input"]];
        (typeof size === "string") ? classNames.push(styles[size]) : Function.prototype();

        return classNames.join(" ");
    }

    getProps() : any {
        const { id, labelledBy, required, requirementsText } = this.props;
        return {
            "id": id,
            "name": id,
            "aria-labelledby": labelledBy,
            "className": this.getClassNames(),
            "required": required,
            "tabIndex": 0,
            "title": requirementsText,
            "type": "checkbox"
        };
    }

    render() {
        
        return (
            <input onChange={this.props.onChange} {...this.getProps()} />
        );
    }

}