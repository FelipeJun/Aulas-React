import React from "react";
import Card from "./Components/card";
import "./app.css";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
let i = 1;

function App() {
  const [pokemon, setPokemon] = React.useState({});

  function Carregar() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + i)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }

  function Proximo() {
    i++;
    Carregar();
  }
  function Anterior() {
    if (i > 1) {
      i--;
      Carregar();
    } else {
      alert("Já está o no primeiro pokemon");
    }
  }

  return pokemon.sprites ? (
    <div className="container container-main d-flex justify-content-center">
      <div className="seta esquerda" onClick={Anterior}>
        <IoIosArrowBack />
      </div>
      <div className="seta direita" onClick={Proximo}>
        <IoIosArrowForward />
      </div>
      <div className="row">
        <Card
          pokeid = {i}
          img={pokemon.sprites}
          name={pokemon.name}
          types={pokemon.types}
          abilities={pokemon.abilities}
          status={pokemon.stats}
        ></Card>
      </div>
    </div>
  ) : (
    <div>
      <button onClick={Carregar}>Carregar</button>
    </div>
  );
}

export default App;
