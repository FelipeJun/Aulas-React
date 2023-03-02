import React from "react";
import Card from "./Components/card";
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
    <div className="container d-flex justify-content-center">
      <div className="row">
        <Card
          pokeid = {i}
          img={pokemon.sprites}
          name={pokemon.name}
          types={pokemon.types}
          abilities={pokemon.abilities}
          status={pokemon.stats}
        ></Card>
        <div className="btn-group justify-content-center" role="group">
          <div className="row">
            <div className="col-auto">
              <button
                onClick={Anterior}
                type="button"
                className="btn btn-primary"
              >
                Anterior
              </button>
            </div>
            <div className="col-auto">
              <button
                onClick={Proximo}
                type="button"
                className="btn btn-secondary"
              >
                Proximo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <button onClick={Carregar}>Carregar</button>
    </div>
  );
}

export default App;
