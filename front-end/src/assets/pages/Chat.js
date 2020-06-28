import React from 'react';
import "./Chat.css";
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
        socket.on('receivedMessage', (message) => {
            this.setState({ messages: message });
        });
    }

    emitMessage(e) {
        e.preventDefault();
        let obj = {
            message: this.state.currentMsg,
            from_user: this.state.userFrom.id,
            to_user: this.state.userTo.id,
            idItem: localStorage.getItem('idItem')
        }
        socket.emit('sendMessage', obj);
    }

    onBlur(e) {
        this.setState({ currentMsg: e.target.value });
        this.clearInputMsg();
    }

    renderMessages() {
        let messages = this.state.messages;
        let array = [];

        for (let i = 0; i < messages.length; i++) {
            let div = <div className='mt-1'>
                <strong className="text-capitalize">{messages[i].fromUser.nome}: </strong><span>{messages[i].message}</span>
                <p className="date">{messages[i]._date}</p>
            </div>;

            array.push(div);
        }

        return array;
    }

    async getMessages() {
        let data = {
            idItem: localStorage.getItem('idItem')
        };

        await api.post('/chat', data).
            then(res => {
                this.setState({ messages: res.data })
            }).catch(err => {
                console.log(err)
            });
    }

    onEnterPress(e) {
        if (e.keyCode == 13 || e.which == 13) {
            this.setState({ currentMsg: e.target.value });
            this.renderMessages();
            this.clearInputMsg();
        }
    }

    clearInputMsg() {
        let inputMsg = document.getElementById('inputMsg');
        inputMsg.value = '';
    }

    render() {
        return (
            <form id="chat" onSubmit={e => this.emitMessage(e)}>
                <div className="chat-container">
                    <div className="title">
                        <a href="/main" className="backChat"><i className="arrow"></i>Voltar</a>
                        <h1>Chat</h1>
                    </div>
                    <div className="body">
                        <div className="userName" style={{ marginBottom: '8px' }}>
                            <span className="text-capitalize">{this.state.userTo.nome}</span>
                        </div>
                        <div className="messages">
                            {this.renderMessages()}
                        </div>
                        <input id="inputMsg" placeholder="Digite sua mensagem" className="typeMsg" style={{ marginTop: '8px', border: 'none', padding: '8px' }} onBlur={e => this.onBlur(e)} onKeyPress={e => this.onEnterPress(e)}></input>
                        <button className="btn btnSend" type="submit">Enviar</button>
                    </div >
                </div>
            </form>
        );
    }
}
export default Chat;