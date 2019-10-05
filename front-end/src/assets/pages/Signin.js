import React from 'react';
import './Signin.css';

export default function Signin() {
    return (
        <div className="signin-container">
            <form>
                <p>Achados, Perdidos &#38; Roubados</p>
                <h1>Cadastro</h1>
                <input placeholder='Nome completo' className="inputs-style" />
                <input placeholder='E-mail' className="inputs-style" />
                <input placeholder='CPF' className="inputs-style" />
                <input placeholder='Telefone' className="inputs-style" />
                <input placeholder='Data de nascimento' type="date" className="inputs-style" />
                <input placeholder='Nova senha' className="inputs-style" />
                <div>
                    <input type="checkbox" id="termos" />
                    <label htmlFor="termos">Li e aceito os <a href="">Termos de Uso</a> e a <a href="">Política de Privacidade</a></label>
                </div>
                <button>Cadastrar</button>
            </form>
        </div>
    )
}