import "./card.css"
function Pokemon(props){
    return(
        <div className="card-text">
            <img className="card-image" src={props.img}/>
            <h1 className="card-title">{props.nome}</h1>
            <div>
                <p>|{props.types.map(type => type.type.name + '|')}</p>
            </div>
            <div className="card-body">
                <h4 className="card-subtitle mb-2">Habilidades:</h4>
                <p>|{props.abilities.map(ha => ha.ability.name + '|')}</p>
            </div>
        </div>
    );
} export default Pokemon;