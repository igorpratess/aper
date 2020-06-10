import React, { Component } from 'react';
import "./Main.css";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import Accordion from '../component/Accordion';

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

    listing() {
        this.props.history.push("/listing");
    }

    cadItem() {
        return [
            <a href="/register-found" className="tab-content">Achado</a>,
            <a href="/register-lost" className="tab-content">Perdido</a>,
            <a href="/register-stolen" className="tab-content">Roubado</a>
        ];
    }

    listItem() {
        return [
            <a href="/list-found" className="tab-content">Achados</a>,
            <a href="/list-lost" className="tab-content">Perdidos</a>,
            <a href="/list-stolen" className="tab-content">Roubados</a>
        ]
    }    

    render() {
        return (
            <div className="main-container" >
                <div className="d-flex justify-center div-position">
                    <h1> O que quer fazer? </h1>
                </div>
                <div className="d-flex justify-center align-items-center" >
                    <Accordion title="Cadastrar item" id="cadItem" content={this.cadItem()}></Accordion>
                    <Accordion title="Ir para listagem de items" id="listItem" content={this.listItem()}></Accordion>
                </div>
            </div>
        );
    }
}

export default withRouter(Main);