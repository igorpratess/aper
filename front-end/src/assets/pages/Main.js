import React, { Component } from 'react';
import "./Main.css";
import axios from "axios";

class Main extends React.Component {
    componentDidMount() {
        this.teste2()
    }

    async teste2() {
        const axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/',        
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });

        const response = await axiosInstance({ method: 'GET', url: '/user'})
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="main-container" >
                <h1> Inicio </h1>
            </div>
        );
    }
}
export default Main;