import React, { Component } from 'react';
import './Accordion.css';

class Accordion extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="tabs">
                        <div className="tab">
                            <input type="checkbox" id={this.props.id} className="input-accordion"></input>
                            <label className="tab-label" htmlFor={this.props.id}>{this.props.title}</label>
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accordion;