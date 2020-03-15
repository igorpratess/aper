import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Signin.css';
import api from '../services/api';
const logo = require('../images/logo-tg.png');

class Signin extends React.Component {

    state = {
        nome: "",
        nickname: "",
        contato: "",
        dia: "1",
        mes: "Janeiro",
        ano: "2002",
        senha: "",
        click: false,
        show: "d-none",
        className: "",
        type: "",
        error: ""
    };

    handleChange = async e => {
        e.preventDefault();
        const { nome, nickname, contato, dia, mes, ano, senha } = this.state;
        if (!nome || !nickname || !contato || !dia || !mes || !ano || !senha) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
            try {
                await api.post("/users", { nome, nickname, contato, dia, mes, ano, senha });
                this.props.history.push("/");
            } catch (err) {
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
            }
        }
    }

    confPass = () => {
        const newPass = document.getElementById('newPass');
        const confPass = document.getElementById('confPass');

        this.setState({ click: true });

        if (newPass.value !== confPass.value) {
            this.setState({ show: "show" });
            this.setState({ className: "errPass" });
        }

    }

    render() {
        return (
            <div className="signin-container" >
                <div className="row-signin"></div>
                <form onSubmit={this.handleChange} action="/" method="POST">
                    <img src={logo} alt="Logo" width="100%" height="70" />
                    {this.state.error && <div className='msg-error'><h5>{this.state.error}</h5></div>}
                    <div className="d-flex divs">
                        <input onChange={e => { console.log('Estou no nome'); this.setState({ nome: e.target.value }) }} placeholder='Nome' className="inputs-style mr-1" />
                        <input onChange={e => { console.log('Estou no nick'); this.setState({ nickname: e.target.value }) }} placeholder='Usuário' className="inputs-style ml-1" />
                    </div>

                    <div className="divs">
                        <input onChange={e => { console.log('Estou no contato'); this.setState({ contato: e.target.value }) }} placeholder='Email ou Telefone' className="inputs-style" />
                    </div>

                    <div className="d-flex divs">
                        <select onChange={e => { console.log('Estou no dia'); this.setState({ dia: e.target.value }) }} name="dia" id="dia">
                            <option value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                            <option value="4">5</option>
                            <option value="5">6</option>
                            <option value="6">7</option>
                            <option value="7">8</option>
                            <option value="8">9</option>
                            <option value="9">10</option>
                            <option value="10">11</option>
                            <option value="11">12</option>
                            <option value="12">13</option>
                            <option value="13">14</option>
                            <option value="14">15</option>
                            <option value="15">16</option>
                            <option value="16">17</option>
                            <option value="17">18</option>
                            <option value="18">19</option>
                            <option value="19">20</option>
                            <option value="20">21</option>
                            <option value="21">22</option>
                            <option value="22">23</option>
                            <option value="23">24</option>
                            <option value="24">25</option>
                            <option value="25">26</option>
                            <option value="26">27</option>
                            <option value="27">28</option>
                            <option value="28">29</option>
                            <option value="29">30</option>
                            <option value="30">31</option>
                        </select>
                        <select onChange={e => { console.log('Estou no mes'); this.setState({ mes: e.target.value }) }} name="mes" id="mes">
                            <option value="0">Janeiro</option>
                            <option value="1">Fevereiro</option>
                            <option value="2">Março</option>
                            <option value="3">Abril</option>
                            <option value="4">Maio</option>
                            <option value="5">Junho</option>
                            <option value="6">Julho</option>
                            <option value="7">Agosto</option>
                            <option value="8">Setembro</option>
                            <option value="9">Outubro</option>
                            <option value="10">Novembro</option>
                            <option value="11">Dezembro</option>
                        </select>
                        <select onChange={e => { console.log('Estou no ano'); this.setState({ ano: e.target.value }) }} name="ano" id="ano">
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                            <option value="1929">1929</option>
                            <option value="1928">1928</option>
                            <option value="1927">1927</option>
                            <option value="1926">1926</option>
                            <option value="1925">1925</option>
                            <option value="1924">1924</option>
                            <option value="1923">1923</option>
                            <option value="1922">1922</option>
                            <option value="1921">1921</option>
                            <option value="1920">1920</option>
                            <option value="1919">1919</option>
                            <option value="1918">1918</option>
                            <option value="1917">1917</option>
                            <option value="1916">1916</option>
                            <option value="1915">1915</option>
                            <option value="1914">1914</option>
                            <option value="1913">1913</option>
                            <option value="1912">1912</option>
                            <option value="1911">1911</option>
                            <option value="1910">1910</option>
                            <option value="1909">1909</option>
                            <option value="1908">1908</option>
                            <option value="1907">1907</option>
                            <option value="1906">1906</option>
                            <option value="1905">1905</option>
                        </select>
                    </div>

                    <div className="divs">
                        <input id='newPass' className={this.state.className + ' inputs-style'} onChange={e => { console.log('Estou no senha'); this.setState({ senha: e.target.value }) }} placeholder='Nova senha' type="password" />
                        <input id='confPass' className={this.state.className + ' inputs-style'} onChange={e => { console.log('Estou no senha'); this.setState({ senha: e.target.value }) }} placeholder='Confirmar senha' type="password" />
                        <small className={this.state.show + ' small'}>As senhas não coincidem</small>
                    </div>

                    <div className='divs'>
                        <input type="checkbox" id="termos" />
                        <label htmlFor="termos">Li e aceito os <a href="#">Termos de Uso</a> e a <a href="#">Política de Privacidade</a></label>
                    </div>

                    <button onClick={this.confPass} type={this.state.type}>Cadastrar</button>
                </form>
            </div>
        )
    }

}

export default withRouter(Signin);