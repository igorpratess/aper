import { connect } from 'react-redux';
import React, { useState } from 'react';
import "./Login.css";
import api from '../services/api';
import * as AuthenticationActions from '../store/actions/authenticated';
const logo = require('../images/logo-tg.png');

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contato: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/signin', {
            contato: this.state.contato,
            password: this.state.password
        })
            .then(res => {
                this.props.authenticated();
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/main');
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="login-container">
                <div className="row-login"></div>
                <form action="/main" method="GET" onSubmit={this.handleSubmit}>
                    <img className='logo' src={logo} alt="Logo" width="100%" height="70" />
                    <input id="user" placeholder='Email ou Usuário' value={this.state.contato} onChange={e => this.setState({ contato: e.target.value })} />
                    <input id="passw" placeholder='Senha' type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                    <div className="div-forgot">
                        <a className="forgot" href="#">Esqueceu sua senha?</a>
                    </div>
                    <button type="submit">Entrar</button>
                    <span>Ainda não é cadastrado? <a className="cadastrar" href="/signin">Cadastrar-se</a></span>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    authenticated: (/*accessToken, refreshToken*/) => dispatch(
        AuthenticationActions.authenticated(/*accessToken, refreshToken*/)
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);