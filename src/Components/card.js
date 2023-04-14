import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({character}){
    return(
        <div className="card-container">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Espécie: {character.species}</p>
        <p>Gênero: {character.gender}</p>
        <p>Localização: {character.location.name}</p>
        <Link to='/details'>
            <button>Detalhes</button>
        </Link>
      </div>
    )
}