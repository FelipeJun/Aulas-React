import React, { useContext } from "react";
import { CharacterContext } from "../CharacterContext";

export default function Details() {
  const { characters } = useContext(CharacterContext);

  return (
    <div>
      <h1>Lista de Personagens:</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>Status: {character.status}</p>
          <p>Espécie: {character.species}</p>
          <p>Gênero: {character.gender}</p>
        </div>
      ))}
    </div>
  );
}