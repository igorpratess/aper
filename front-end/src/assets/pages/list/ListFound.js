import React, { Component } from 'react';
import "../../pages/Listing";
import api from '../../services/api';

class ListFound extends React.Component {

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
        const response = await api.get('/listing/found', {})
            .then(res => {
                this.setState({ list: res.data });
            })
            .catch(error => {
                console.log(error);
            })
    }

    onBtnClick(e) {
        let id = e.target.id;
        localStorage.setItem('userId', id);
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
                        <img src={list[i].images} alt="Imagem do item" width="100" height="100" />
                    </div>
                    <div className="d-flex">
                        <div className="col-6 d-flex justify-center"></div>
                        <div className="col-6 d-flex justify-center">
                            <a href='/chat' id={list[i].userId} className="btn-like btn btn-outline-primary font-weight-bold col-4" onClick={e => this.onBtnClick(e)}>É meu <div className="icon-like"></div></a>
                        </div>
                    </div>
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
export default ListFound;