import React, { Component } from 'react';

export class Property extends Component {

    constructor(props) {
        super(props);
        this.state = { value: props.pValue };
        console.log("constructor: ");
        console.log(this);
        this.simpleInputHandler = this.simpleInputHandler.bind(this);
    }

    simpleInputHandler = e => this.setState({ value: e.target.value });

    render() {
        return (
            <div class="form container row">
                <p>{this.props.pName}</p>
                <input type={this.props.pDisplay} value={this.state.value} onChange={e => this.simpleInputHandler(e)} />
            </div>
        );
    }


}