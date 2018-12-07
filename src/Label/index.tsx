import * as React from 'react';

export type Props = {
    children: any,
    labelFor: string,
    labelId: string
};

export default class Label extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { children, labelFor, labelId } = this.props;

        return (
            <label htmlFor={ labelFor } id={ labelId }>{ children }</label>
        );
    }

}