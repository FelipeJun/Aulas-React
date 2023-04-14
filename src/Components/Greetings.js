import React from "react";
import { Link } from "react-router-dom";

export default function Greetings(){
    return(
        <div className="greetings">
            <h1>Bem-vindo !!!</h1>
            <h2>Aqui você encontra informações sobre Rick and Morty</h2>
            <Link to='/character'>
                <button> Next </button>           
            </Link>
        </div>
    )
}