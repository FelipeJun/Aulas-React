import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Piloto from "../components/Piloto";

export default function IndexPage() {
  const [pilotos, setPilotos] = useState();
  const navigate = useNavigate();

  function getPilotos() {
    fetch("http://127.0.0.1:3001/pilotos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        setPilotos(json);
      });
  }

  useEffect(()=>{
    getPilotos();
  },[]);

  return (
    <>
      <h1>Pilotos</h1>
      <button onClick={() => navigate("/criar")}>Novo Piloto</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#Id</th>
            <th scope="col">Nome do Piloto</th>
            <th scope="col">Número do Piloto</th>
            <th scope="col">Posição</th>
            <th scope="col">Categoria</th>
          </tr>
        </thead>
        <tbody>
      {pilotos &&
        pilotos.map((piloto) => {
          return (
            <Piloto
              key={piloto._id}
              id={piloto._id}
              nomePiloto={piloto.nomePiloto}
              numPiloto={piloto.numPiloto}
              posicao={piloto.posicao}
              categoria={piloto.categoria}
            />
          );
        })}
        </tbody>
        </table>
    </>
  );
}
