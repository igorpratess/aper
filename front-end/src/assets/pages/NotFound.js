import React from 'react';
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="notFound-container d-flex flex-column" >
            <h1> Página não encontrada</h1>
            <a href="/"><h2>Início</h2></a>
        </div>
    );
}