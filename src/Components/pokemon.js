import "./card.css";

function Pokemon(props) {
  const getTypeColor = (type) => {
    switch (type) {
      case "normal":
        return "#A8A878";
      case "fire":
        return "#F08030";
      case "water":
        return "#6890F0";
      case "grass":
        return "#78C850";
      case "fighting":
        return "#C03028";
      case "flying":
        return "#A890F0";
      case "poison":
        return "#A040A0";
      case "ground":
        return " #E0C068";
      case "rock":
        return "#B8A038";
      case "bug":
        return " #A8B820";
      case "ghost":
        return "#705898";
      case "steel":
        return "#B8B8D0";
      case "electric":
        return "#F8D030";
      case "psychic":
        return "#F85888";
      case "ice":
        return "#98D8D8";
      case "dragon":
        return "#7038F8";
      case "dark":
        return "#705848";
      case "fairy":
        return "#EE99AC";
      default:
        return "#c2c2ba";
    }
  };

  return (
    <div className="card-text">
      <div className="row">
        <div className="col">
          <div className="texto-direita">#{props.pokeid}</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="card-title text-center ">{props.nome}</h1>
        </div>
      </div>
      <div className="d-flex justify-content-center ">
        <img
          className="card-image"
          src={props.img.front_default}
          alt="Pokemon"
        />
        <img
          className="card-image"
          src={props.img.back_default}
          alt="Pokemon"
        />
      </div>
      <div>
        <div className="container d-flex justify-content-center">
          <div className="row">
            {props.types.map((type) => (
              <div className="col rounded m-1" style={{ backgroundColor: getTypeColor(type.type.name) }}>
                {type.type.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row card-body text-center bg-dark m-5 rounded">
        <div className="col-6">
          <h4 className="card-subtitle mb-2">Habilidades</h4>

          {props.abilities.map((ha) => (
            <div>{ha.ability.name}</div>
          ))}
        </div>
        <div className="col-6">
          <div className="row">
            <h4 className="card-subtitle mb-2">Status</h4>
            <div className="col-6 px-2">
              {props.status.map((st, i) => {
                if (i < 3)
                  return (
                    <div>
                      {st.stat.name}: {st.base_stat}
                    </div>
                  );
              })}
            </div>
            <div className="col-6 px-2">
              {props.status.map((st, i) => {
                if (i >= 3)
                  return (
                    <div>
                      {st.stat.name}: {st.base_stat}
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pokemon;
