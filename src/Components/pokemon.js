import "./card.css"
function Pokemon(props){
    return(
        <div className="card-text">
            <h1 className="card-title">{props.nome}</h1>
            <div className="d-flex justify-content-center ">
                <img className="card-image" src={props.img.front_default} alt='Pokemon'/>
                <img className="card-image" src={props.img.back_default} alt='Pokemon'/>
            </div>
            <div>
                <p>|{props.types.map(type => type.type.name + '|')}</p>
            </div>
            <div className="row card-body bg-dark">
                <div className="col-6">
                    <h4 className="card-subtitle mb-2">Habilidades</h4>
                    {props.abilities.map(ha => <div>{ha.ability.name}</div>)}
                </div>
                <div className="col-6">
                    <div className="row">
                        <h4 className="card-subtitle mb-2">Status</h4>
                        <div className="col-sm-6">
                            {props.status.map((st, i)=> {
                                if (i < 3)return <div>{st.stat.name}: {st.base_stat}</div>;
                            })}
                        </div>
                        <div className="col-sm-6">
                            {props.status.map((st, i)=> {
                                if (i >= 3) return <div>{st.stat.name}: {st.base_stat}</div>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} export default Pokemon;