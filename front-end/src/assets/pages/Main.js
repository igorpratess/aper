import React, { Component } from 'react';
import "./Main.css";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
    componentDidMount() {
        this.beforeLogin()
    }

    async beforeLogin() {
        const axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/',
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });

        const response = await axiosInstance({ method: 'GET', url: '/user' })
            .then(res => {
            })
            .catch(error => {
            })
    }

    registerItem() {
        this.props.history.push("/register-item");
    }

    listing() {
        this.props.history.push("/listing");
    }

    render() {
        return (
            <div className="main-container" >
                <div className="d-flex justify-center">
                    <h1> O que quer fazer? </h1>
                </div>
                <div className="d-flex justify-center" >
                    <div className="card" onClick={this.registerItem.bind(this)}>
                        <h4>Cadastrar um item</h4>
                    </div>
                    <div className="card" onClick={this.listing.bind(this)}>
                        <h4>Ir para listagem de itens</h4>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Main);