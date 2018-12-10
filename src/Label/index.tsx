import * as React from 'react';

export type Props = {
    children: any,
    labelFor: string,
    id: string
};

export default class Label extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { children, labelFor, id } = this.props;

        return (
            <label id={id} htmlFor={labelFor} >{children}</label>
        );
    }

}