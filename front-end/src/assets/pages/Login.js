import React, { useState } from 'react';
import "./Login.css";
const logo = require('../images/logo-tg.png');

// import api from '../services/api';

function Login({ history }) {
    const [username, setUsername] = useState('');
    const [userpass, setUserpass] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        // const response = await api.post('/cadastro', {
        //     username,
        //     userpass
        // });

        // console.log(response);

        history.push('/main');
    }

    return (
        <div className="login-container">
            <div className="row"></div>
            <form onSubmit={handleSubmit}>
                <img className='logo' src={logo} alt="Logo" width="320" height="70" />
                <input placeholder='Email ou Usuário' value={username} onChange={e => setUsername(e.target.value)} />
                <input placeholder='Senha' type="password" value={userpass} onChange={e => setUserpass(e.target.value)} />
                <div className="div-forgot">
                    <a className="forgot" href="#">Esqueceu sua senha?</a>
                </div>
                <button>Entrar</button>
                <span>Ainda não é cadastrado? <a className="cadastrar" href="/signin">Cadastrar-se</a></span>
            </form>
        </div>
    );
}

export default Login;