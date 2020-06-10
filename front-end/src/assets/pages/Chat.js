import React, { Component } from 'react';
import "./Chat.css";

class Chat extends React.Component {

    render() {
        return (
            <div className="chat-container" >
                <h1>Chat</h1>
                <div className="userName" style={{marginBottom: '8px'}}>
                    <span>Igor Prates</span>
                </div>
                <div className="messages">
                    <i>Sobre o item perdido: Celular Moto G7, localização: R. do Comércio, 1764 Centro</i>
                    <br/>
                    <br/>
                    <span><b>Vinicius:</b> Boa tarde, vi que vc achou meu celular, vou te ligar agora nele só para confirmar que é meu mesmo</span>
                </div>
                <input placeholder="Digite sua mensagem" className="typeMsg" style={{marginTop: '8px', border: 'none', padding: '8px'}}></input>
                <button className="btn btnSend">Enviar</button>
            </div >
        );
    }
}
export default Chat;