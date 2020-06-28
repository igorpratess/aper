import React from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import "./PageLFS.css";
import api from '../../services/api';

class Found extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            typeItem: '',
            name: '',
            date: '',
            description: '',
            images: '',
            itemType: 'found',
            userId: localStorage.getItem('idUser'),
            error: ""
        };
        this.setLink = this.setLink.bind(this);
        this.getFilesFromInputFiles = this.getFilesFromInputFiles.bind(this);
    }

    getFilesFromInputFiles(ev) {
        let arrayLinks = [];

        let filenames = Array.from(ev.target.files).map(async function (f) {
            let fd = new FormData();
            fd.append('image', f);

            await axios.post(
                "https://api.imgur.com/3/image",
                fd,
                {
                    headers: {
                        'Authorization': 'Client-ID d97ff38029b8d95',
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(res => {
                arrayLinks.push(res.data.data.link);
            }).catch(err => {
                console.log(err);
            })
        });
        this.setLink(arrayLinks);
    }

    setLink(link) {
        this.setState({ images: link });
    }

    handleChange = async e => {
        e.preventDefault();
        let { location, typeItem, name, date, description, itemType, userId, images } = this.state;

        if (!location || !typeItem || !name || !date || !itemType) {
            this.setState({ error: "Campos obrigatórios não preenchidos" });
        } else {
            images = JSON.stringify(images);
            await api.post("/listing", { location, typeItem, name, date, description, itemType, userId, images })
                .then(res => {
                    this.props.history.push("/list-found");
                }).catch(err => {
                    this.setState({ error: "Ocorreu um erro ao cadastrar um item." });
                })
        }
    }

    render() {
        return (
            <div className="register-container">
                <div className="row-register-item">
                    <section className="row-found mt-1">
                        <form action="/list-found" method="POST" onSubmit={this.handleChange}>
                            <h2 style={{ textAlign: "center" }}>Cadastrar Achado</h2>
                            {this.state.error && <div className='msg-error text-center'><h5>{this.state.error}</h5></div>}
                            <div className="d-flex justify-content-between align-items-center my-1">
                                <label htmlFor="location">Local: <span>*</span></label>
                                <input type="text" id="location" placeholder="Local onde foi achado" onChange={e => { this.setState({ location: e.target.value }) }} />
                            </div>

                            <div className="d-flex justify-content-between align-items-center my-1">
                                <label htmlFor="location">Tipo: <span>*</span></label>
                                <input type="text" id="tipo" placeholder="Tipo do item, ex: objeto, roupa, eletrônico" onChange={e => { this.setState({ typeItem: e.target.value }) }} />
                            </div>

                            <div className="d-flex justify-content-between align-items-center my-1">
                                <label htmlFor="location">Nome do item: <span>*</span></label>
                                <input type="text" id="name" placeholder="Nome do item, ex: Moto G7" onChange={e => { this.setState({ name: e.target.value }) }} />
                            </div>

                            <div className="d-flex justify-content-between align-items-center my-1">
                                <label htmlFor="location">Data: <span>*</span></label>
                                <input type="date" id="date" onChange={e => { this.setState({ date: e.target.value }) }} />
                            </div>

                            <div className="d-flex justify-content-between my-1">
                                <label htmlFor="location">Descrição: </label>
                                <textarea placeholder="Descreva aqui como você achou esse item, ou alguma coisa importante que queira falar para pessoa que perdeu possa identificar" id="description" cols="20" rows="8" onChange={e => { this.setState({ description: e.target.value }) }}></textarea>
                            </div>

                            <div className="d-flex justify-content-between align-items-center my-1">
                                <label htmlFor="img" >Imagem:</label>
                                <input type="file" id="img" multiple onChange={this.getFilesFromInputFiles} />
                            </div>

                            <div className="d-flex justify-center mt-1">
                                <button className="btn btn-red col-3">Cancelar</button>
                                <button className="btn btn-green col-3" type="submit">Enviar</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Found);