import Pokemon from "./pokemon";
import "./card.css";

function Card(props) {
  return (
    <div className="card card-body-sty">
      <Pokemon
        pokeid = {props.pokeid}
        img={props.img}
        nome={props.name}
        types={props.types}
        abilities={props.abilities}
        status={props.status}
      ></Pokemon>
    </div>
  );
}
export default Card;
