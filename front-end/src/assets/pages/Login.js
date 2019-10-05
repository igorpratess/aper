import React, { useState } from 'react';
import "./Login.css";

// import api from '../services/api';

function Login({ history}) {
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
            <form onSubmit={handleSubmit}>
                <p>Achados, Perdidos &#38; Roubados</p>
                <h1>Login</h1>
                <input placeholder='Email' value={username} onChange={e => setUsername(e.target.value)}/>
                <input placeholder='Senha' type="password" value={userpass} onChange={e => setUserpass(e.target.value)}/>
                <button>Entrar</button>
                <span>Ainda não é cadastrado? <a href="/signin">Cadastrar-se</a></span>
            </form>
        </div>
    );
}

export default Login;