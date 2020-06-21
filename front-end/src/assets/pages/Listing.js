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
    }

    teste() {
        let list = this.state.list;
        let items = [];
        let description;
        let images;
        let date;

        for (let i = 0; i < list.length; i++) {
            if (list[i].description) {
                description = <span>Descrição: {list[i].description}</span>
            }
            if (list[i].images) {
                // faz algo
            }
            if (list[i].date) {
                let aux = list[i].date.split('-');
                date = aux[2] + '/' + aux[1] + '/' + aux[0];
            }
            let li = <li>
                <div className="div-items">
                    <h3 className="title">{list[i].itemType}</h3>
                    <span>Local onde foi {list[i].itemType}: {list[i].location}</span>
                    <span>Tipo de item: {list[i].typeItem}</span>
                    <span>Nome do item: {list[i].name}</span>
                    <span>Data que foi {list[i].itemType}: {date}</span>
                    {description}
                    <div className="d-flex">
                        <div className="col-6 d-flex justify-center"></div>
                        <div className="col-6 d-flex justify-center">
                            <button className="btn btn-outline-primary font-weight-bold col-4">É meu <div className="icon-like"></div></button>
                        </div>
                    </div>
                    <input type="hidden" value={list[i].userId}/>
                </div>
            </li>
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