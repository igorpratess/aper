import React, { useState } from 'react';
import "./Login.css";
// import api from '../services/api';
const logo = require('../images/logo-tg.png');


function Login({ history }) {
    const [username, setUsername] = useState('');
    const [userpass, setUserpass] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        // const response = await api.post('/signin', {
        //     username,
        //     userpass
        // });

        // console.log(response);

       history.push('/main');
    }

    return (
        <div className="login-container">
            <div className="row-login"></div>
            <form action="/main" method="GET" onSubmit={handleSubmit}>
                <img className='logo' src={logo} alt="Logo" width="100%" height="70" />
                <input id="user" placeholder='Email ou Usuário' value={username} onChange={e => setUsername(e.target.value)} />
                <input id="passw" placeholder='Senha' type="password" value={userpass} onChange={e => setUserpass(e.target.value)} />
                <div className="div-forgot">
                    <a className="forgot" href="#">Esqueceu sua senha?</a>
                </div>
                <button type="submit">Entrar</button>
                <span>Ainda não é cadastrado? <a className="cadastrar" href="/signin">Cadastrar-se</a></span>
            </form>
        </div>
    );
}

export default Login;