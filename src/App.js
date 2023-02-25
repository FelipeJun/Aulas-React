import React from 'react';
import Pokemon from './Components/pokemon'
let i = 1;

function App() {
  const [pokemon, setPokemon] = React.useState({});

  function Carregar(){
    fetch('https://pokeapi.co/api/v2/pokemon/' + i)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setPokemon(data);
    });
  }

  function Proximo(){
    i++;
    Carregar();
  }
  function Anterior(){
    if (i >1){
      i--;
      Carregar();
    }
    else{
      alert('Já está o no primeiro pokemon');
    }
  }

  return (
    pokemon.sprites ?
      <div>
        <Pokemon img = {pokemon.sprites.front_default} 
        nome ={pokemon.name} types = {pokemon.types} abilities = {pokemon.abilities}></Pokemon>
        <button onClick={Anterior}>Anterior</button>
        <button onClick={Proximo}>Proximo</button>
      </div>
    :
      <div>
        <button onClick={Carregar}>Carregar</button>
      </div>
  );
}

export default App;

