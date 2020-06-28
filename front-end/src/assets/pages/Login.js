import { connect } from 'react-redux';
import React, { useState } from 'react';
import "./Login.css";
import api from '../services/api';
import * as AuthenticationActions from '../store/actions/authenticated';
const logo = require('../images/logo-tg.png');

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        contato: "",
        password: "",
        error: "",
        checkbox: true
    }

    async handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/signup', {
            contato: this.state.contato,
            password: this.state.password
        })
            .then(res => {
                this.props.authenticated();
                this.props.setUser(res.data);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('idUser', res.data.id);
                this.setLocalStorage();
                this.props.history.push('/main');
            })
            .catch(error => {
                this.setState({ error: "Usuário ou senha inválidos!" });
            })
    }

    toggleChange = () => {
        this.setState({
            checkbox: !this.state.checkbox,
        });
    }

    setLocalStorage() {
        const user = document.getElementById('user');

        if (this.state.checkbox === true) {
            localStorage.setItem('user', user.value);
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="row-login"></div>
                <form action="/main" method="GET" onSubmit={this.handleSubmit}>
                    <img className='logo' src={logo} alt="Logo" width="100%" height="70" />
                    {this.state.error && <div className='msg-error msg-error-size'><h5>{this.state.error}</h5></div>}
                    <input id="user" placeholder='Email' onChange={e => this.setState({ contato: e.target.value })} />
                    <input id="passw" placeholder='Senha' type="password" onChange={e => this.setState({ password: e.target.value })} />
                    <button style={{ marginTop: '30px' }} type="submit">Entrar</button>
                    <span>Ainda não é cadastrado? <a className="cadastrar" href="/signup">Cadastrar-se</a></span>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    authenticated: (s) => dispatch(
        AuthenticationActions.authenticated(s)
    ),
    setUser: (s) => dispatch(
        AuthenticationActions.setUser(s)
    )
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);