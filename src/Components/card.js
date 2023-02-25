import Pokemon from './pokemon';
import "./card.css"

function Card(props){
    return(
        <div className="card w-50 d-flex align-items-center text-center card-body">
            <Pokemon img = {props.img} 
            nome ={props.name} types = {props.types}
            abilities = {props.abilities}>
            </Pokemon>
        </div>
    );
} export default Card;