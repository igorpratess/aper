import React, { Component } from 'react';
import "./RegisterItem.css";
import PageLFS from "./register/PageLFS";

class Register extends React.Component {
    render() {
        return (
            <div className="register-container" >
                <div className="row-register-item">
                    <h1 className="text-center">Cadastrar item</h1>
                    <div>
                        <PageLFS />
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;