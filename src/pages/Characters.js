import React, { useContext } from "react";
import Card from "../components/Card";
import { CharacterContext } from "../CharacterContext";


export default function Character() {
  const { characters } = useContext(CharacterContext);
  return (
      <div>
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
  );
}
