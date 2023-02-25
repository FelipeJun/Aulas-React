function Pokemon(props){
    return(
        <div className="card">
                <img src={props.img}/>
                <h3>Tipos:</h3>
                <p>|{props.types.map(type => type.type.name + '|')}</p>
            <div className="card-body">
                <h1 className="card-title">{props.nome}</h1>
                <h4 className="card-subtitle mb-2 text-muted">Habilidades:</h4>
                <p>|{props.abilities.map(ha => ha.ability.name + '|')}</p>
            </div>
        </div>
    );
} export default Pokemon;