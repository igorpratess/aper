import React, { Component, useState, useEffect } from 'react';
import "./Chat.css";
import axios from "axios";
import api from '../services/api';
import io from "socket.io-client";
const socket = io('http://localhost:8000');

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            currentMsg: '',
            date: '',
            userTo: {},
            userFrom: {}
        }
        this.setMessages();
    }

    componentDidMount() {
        this.getUserTo();
        this.getUserFrom();
        this.getMessages();
    }

    async getUserTo() {
        let id = localStorage.getItem('userId');

        await api.get('/user/' + id).
            then(res => {
                this.setState({ userTo: res.data })
            }).catch(err => {
                console.log(err)
            })
    }

    async getUserFrom() {
        let id = localStorage.getItem('idUser');

        await api.get('/user/' + id).
            then(res => {
                this.setState({ userFrom: res.data })
            }).catch(err => {
                console.log(err)
            })
    }

    setMessages() {
        console.log('entrou aqui')
        socket.on('previousMessage', (messages) => {
            // for (messages of messages) {
            //     this.setState({ message: messages })
            // }
        });

        socket.on('receivedMessage', (message) => {
            this.setState({ messages: message });
        });
    }

    emitMessage(e) {
        e.preventDefault();
        let obj = {
            message: this.state.currentMsg,
            from_user: this.state.userFrom.id,
            to_user: this.state.userTo.id
        }
        socket.emit('sendMessage', obj);
    }

    onBlur(e) {
        this.setState({ currentMsg: e.target.value });
    }

    renderMessages() {
        let messages = this.state.messages;
        let array = [];

        for (let i = 0; i < messages.length; i++) {
            let div = <div>
                <strong>{messages[i].fromUser.nome}: </strong><span>{messages[i].message}</span>
            </div>;

            array.push(div);
        }

        return array;
    }

    async getMessages() {
        let data = {
            to_user: localStorage.getItem('userId'),
            from_user: localStorage.getItem('idUser')
        }

        await api.post('/chat', data).
            then(res => {
                this.setState({ messages: res.data })
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <form id="chat" onSubmit={e => this.emitMessage(e)}>
                <div className="chat-container" >
                    <h1>Chat</h1>
                    <div className="userName" style={{ marginBottom: '8px' }}>
                        <span>{this.state.userTo.nome}</span>
                    </div>
                    <div className="messages">
                        {this.renderMessages()}
                    </div>
                    <input placeholder="Digite sua mensagem" className="typeMsg" style={{ marginTop: '8px', border: 'none', padding: '8px' }} onBlur={e => this.onBlur(e)}></input>
                    <button className="btn btnSend" type="submit">Enviar</button>
                </div >
            </form>
        );
    }
}
export default Chat;