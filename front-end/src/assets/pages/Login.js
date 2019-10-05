import React from 'react';
import "./Login.css";

function Login() {
    return (
        <div className="login-container">
            <form>
                <p>Achados, Perdidos &#38; Roubados</p>
                <input placeholder='Email' />
                <input placeholder='Senha' />
                <button>Entrar</button>
                <span>Ainda não é cadastrado? <a href="teste">Cadastrar-se</a></span>
            </form>
        </div>
    );
}

export default Login;