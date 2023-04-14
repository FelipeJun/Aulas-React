import { createContext, useState, useEffect } from "react";

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Faz a chamada para a API do Rick and Morty
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <CharacterContext.Provider value={{ characters }}>
      { children }
    </CharacterContext.Provider>
  );
};