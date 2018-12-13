import React, { Component } from 'react';
import queryString from 'query-string';

export default class LoginCallback extends Component {

    state = {
        "code": "",
        "state": ""
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let parsed = queryString.parse(this.props.location.search);
        this.setState({
            "code": parsed.code,
            "state": parsed.state
        });
    }

    render() {
    
        return (
            <div>
                <p>Code: <code>{ this.state.code }</code></p>
                <p>State: <code>{ this.state.state }</code></p>
            </div>
        );
    }

} 