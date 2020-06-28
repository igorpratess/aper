import React from 'react';
import "../../pages/Listing";
import api from '../../services/api';

class ListStolen extends React.Component {

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
        const response = await api.get('/listing/stolen', {})
            .then(res => {
                this.setState({ list: res.data });
            })
            .catch(error => {
                console.log(error);
            })
    }

    async btnEhMeuClick(e) {
        let id = e.target.id;
        let idItem = e.target.getAttribute('data-iditem');
        localStorage.setItem('idItem', idItem);

        const response = await api.put('/listing/' + idItem, {
            ownerUserId: localStorage.getItem('idUser')
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })

        localStorage.setItem('userId', id);
        this.props.history.push('/chat');
    }

    btnChatClick(e) {
        let id = e.target.id;
        let idItem = e.target.getAttribute('data-iditem');
        localStorage.setItem('idItem', idItem);
        localStorage.setItem('userId', id);
        this.props.history.push('/chat');
    }

    mountList() {
        let list = this.state.list;
        let items = [];
        let description;
        let date;

        for (let i = 0; i < list.length; i++) {
            let images = [];
            let btn;

            if (list[i].description) {
                description = <span>Descrição: {list[i].description}</span>
            }
            if (list[i].images.length) {
                let imgs = JSON.parse(list[i].images);

                for (let j = 0; j < imgs.length; j++) {
                    images.push(<img src={imgs[j]} width="100" height="100" />);
                }
            }
            if (list[i].date) {
                let aux = list[i].date.split('-');
                date = aux[2] + '/' + aux[1] + '/' + aux[0];
            }
            if (list[i].userId != localStorage.getItem('idUser')) {
                btn = <a id={list[i].userId} data-ownerId={list[i].ownerUserId ?? 0} data-iditem={list[i].id} className="btn-like btn btn-outline-primary font-weight-bold col-4" onClick={e => this.btnEhMeuClick(e)}>É meu<div className="icon-like"></div></a>;
            } else {
                btn = <a id={list[i].ownerUserId} data-iditem={list[i].id} className="btn-like btn btn-outline-primary font-weight-bold col-4" onClick={e => this.btnChatClick(e)}>Chat</a>;
            }
            let li = <li>
                <div className="div-items">
                    <h3 className="title">Roubado</h3>
                    <span>Local onde foi roubado: {list[i].location}</span>
                    <span>Tipo de item: {list[i].typeItem}</span>
                    <span>Nome do item: {list[i].name}</span>
                    <span>Data que foi roubado: {date}</span>
                    {description}
                    <div className="d-flex">
                        {images}
                    </div>
                    <div className="d-flex">
                        <div className="col-6 d-flex justify-center"></div>
                        <div className="col-6 d-flex justify-center">
                            {btn}
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
                <h1>Lista de Roubados</h1>
                <div className="list">
                    <ul>
                        {this.mountList()}
                    </ul>
                </div>
            </div>
        );
    }
}
export default ListStolen;