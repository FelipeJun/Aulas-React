import Card from "./card";
import "./CSS/app.css";
import Setas from "./setas";

function Pokedex(props) {
  let controle = props.controle;
  let pokemon = props.pokemon;
  return (
    <div className="container container-main d-flex justify-content-center">
      <Setas Anterior ={controle.Anterior} Proximo = {controle.Proximo} />
      <div className="row">
        <Card
          pokeid={controle.i}
          img={pokemon.sprites}
          name={pokemon.name}
          types={pokemon.types}
          abilities={pokemon.abilities}
          status={pokemon.stats}
        ></Card>
      </div>
    </div>
  );
}

export default Pokedex;
