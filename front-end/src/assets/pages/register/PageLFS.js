import React, { Component } from 'react';
import "./PageLFS.css";
import api from '../../services/api';
import { withRouter } from 'react-router-dom';

class PageLFS extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        location: '',
        typeItem: '',
        name: '',
        date: '',
        description: '',
        images: '',
        itemType: 'achado',
        error: ""
    };

    getFilesFromInputFiles(ev) {
        let filenames = Array.from(ev.target.files).map(function (f) {
            return f;
        });

        // this.setState({ images: filenames})
    }

    handleChange = async e => {
        e.preventDefault();
        const { location, typeItem, name, date, description, itemType, images } = this.state;
        if (!location || !typeItem || !name || !date || !itemType) {
            this.setState({ error: "Campos obrigatórios não preenchidos" });
        } else {
            await api.post("/listing", { location, typeItem, name, date, description, itemType, images })
                .then(res => {
                    this.props.history.push("/listing");
                })
                .catch(err => {
                    console.log(err)
                    this.setState({ error: "Ocorreu um erro ao cadastrar um item." });
                })

        }
    }

    render() {
        return (
            <section className="row-found mt-1">
                <form action="/listing" method="POST" onSubmit={this.handleChange}>
                    {this.state.error && <div className='msg-error text-center'><h5>{this.state.error}</h5></div>}

                    <div className="d-flex justify-center align-items-center mt-1">
                        <div className="d-flex justify-center align-items-center">
                            <input name="check" type="radio" id="achado" value="achado" defaultChecked onChange={e => this.setState({ itemType: e.target.value })} />
                            <label htmlFor="achado" className="textLAF">Achado</label>
                        </div>
                        <div className="d-flex justify-center align-items-center">
                            <input name="check" type="radio" id="perdido" value="perdido" onChange={e => this.setState({ itemType: e.target.value })} />
                            <label htmlFor="perdido" className="textLAF">Perdido</label>
                        </div>
                        <div className="d-flex justify-center align-items-center">
                            <input name="check" type="radio" id="roubado" value="roubado" onChange={e => this.setState({ itemType: e.target.value })} />
                            <label htmlFor="roubado" className="textLAF">Roubado</label>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center my-1">
                        <label htmlFor="location">Local: <span>*</span></label>
                        <input type="text" id="location" onChange={e => { this.setState({ location: e.target.value }) }} />
                    </div>

                    <div className="d-flex justify-content-between align-items-center my-1">
                        <label htmlFor="location">Tipo: <span>*</span></label>
                        <input type="text" id="tipo" onChange={e => { this.setState({ typeItem: e.target.value }) }} />
                    </div>

                    <div className="d-flex justify-content-between align-items-center my-1">
                        <label htmlFor="location">Nome do item: <span>*</span></label>
                        <input type="text" id="name" onChange={e => { this.setState({ name: e.target.value }) }} />
                    </div>

                    <div className="d-flex justify-content-between align-items-center my-1">
                        <label htmlFor="location">Data: <span>*</span></label>
                        <input type="date" id="date" onChange={e => { this.setState({ date: e.target.value }) }} />
                    </div>

                    <div className="d-flex justify-content-between my-1">
                        <label htmlFor="location">Descrição: </label>
                        <textarea placeholder="Se quiser contar algo" id="description" cols="20" rows="8" onChange={e => { this.setState({ description: e.target.value }) }}></textarea>
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
        )
    }
}

export default withRouter(PageLFS);