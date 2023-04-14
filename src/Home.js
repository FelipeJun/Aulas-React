import Pokedex from "./Components/pokedex";
import { useParams } from "react-router-dom";
import React from "react";


export default function Home(){
    const { pokemonId } = useParams();
    const [pokemon, setPokemon] = React.useState({});
    const [i, setI] = React.useState(1);
  
    function Carregar() {
      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPokemon(data);
        });
    }
  
    function Proximo() {
      setI(i + 1);
    }
  
    function Anterior() {
      if (i > 1) {
        setI(i - 1);
      } else {
        alert("Já está o no primeiro pokemon");
      }
    }
  
    React.useEffect(()=>{
      Carregar();
    },[i]);
    return pokemon.sprites ? (
        <>
          <Pokedex pokemon={pokemon} controle={{ pokemonId, Proximo, Anterior }} />
        </>
      ) : (
        <div>
          <button onClick={Carregar}>Carregar</button>
        </div>
      );
}