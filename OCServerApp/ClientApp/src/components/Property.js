import React, { Component } from 'react';

export class Property extends Component {

    constructor(props) {
        super(props);
        //this.changeHandler = this.changeHandler.bind(this);
    }

    //changeHandler(e) {
    //    this.props.onChangeHandler(e.target.value);
    //}

    render() {
        return (
            <div class="form container row">
                <p>{this.props.pName}</p>
                <input type={this.props.pDisplay} value={this.props.pValue} />
            </div>
        );
    }


}