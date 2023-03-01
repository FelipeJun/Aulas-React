import Pokemon from './pokemon';
import "./card.css"

function Card(props){
    return(
        <div className="card w-50 text-center card-body">
            <Pokemon img = {props.img} 
            nome ={props.name} types = {props.types}
            abilities = {props.abilities} status = {props.status}>
            </Pokemon>
        </div>
    );
} export default Card;