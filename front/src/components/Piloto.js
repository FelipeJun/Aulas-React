import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePiloto } from "../Functions/deletePiloto";

function Piloto({ id, nomePiloto, numPiloto, posicao, categoria }) {
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{nomePiloto}</td>
        <td>{numPiloto}</td>
        <td>{posicao}</td>
        <td>{categoria}</td>
        <td><button onClick={() => navigate("/editar/" + id)}>Editar</button></td>
        <td><button onClick={() => deletePiloto(nomePiloto)}>Remover</button></td>
      </tr>
    </>
  );
}

export default Piloto;
