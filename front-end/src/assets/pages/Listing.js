import React, { Component } from 'react';
import "./Listing.css";
import api from '../services/api';

class Listing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.getItems();
    }

    async getItems() {
        const response = await api.get('/listing', {})
            .then(res => {
                this.setState({ list: res.data });
            })
            .catch(error => {
                console.log(error);
            })
        console.log(response);
    }

    teste() {
        let list = this.state.list;
        let items = [];

        for (let i = 0; i < list.length; i++) {
            let li = <li>{list[i].location}</li>;
            items.push(li);
        }

        return items;
    }

    render() {
        return (
            <div className="listing-container" >
                <h1>Listagem</h1>
                <div className="list">
                    <ul>
                        {this.teste()}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Listing;