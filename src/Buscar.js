import React from "react";

export default function Buscar(){
    return(
        <div className="d-flex">
            <input 
            type="search" 
            className="form-control" 
            placeholder="Digite o nome do Video"/>
            <button className="btn btn-sm btn-outline-primary">Buscar</button>
        </div>
    )
}