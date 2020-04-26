import React, { Component } from 'react';
import "./Listing.css";

class Listing extends React.Component {
    render() {
        return (
            <div className="listing-container" >
                <h1>Listagem</h1>
                <div className="list"></div>
            </div>
        );
    }
}
export default Listing;