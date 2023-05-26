import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { editPiloto } from "../Functions/editPiloto";

export default function EditarPage() {
  const navigate = useNavigate();
  const nomePiloto = useRef(null);
  const numPiloto = useRef(null);
  const posicao = useRef(null);
  const categoria = useRef(null);
  const { id } = useParams();

  return (
    <>
      <h1>Piloto {id}</h1>
      <form>
        <div class="form-group">
          <label for="nome Piloto">Nome do Piloto</label>
          <input
            type="text"
            ref={nomePiloto}
            class="form-control"
            placeholder="nome Piloto"
          />
        </div>
        <div class="form-group">
          <label for="nome Piloto">Numero do Piloto</label>
          <input
            type="text"
            ref={numPiloto}
            placeholder="Número do Piloto"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="nome Piloto">Posição</label>
          <input
            type="text"
            ref={posicao}
            class="form-control"
            placeholder="Posição Piloto"
          />
        </div>
        <div class="form-group">
          <label for="nome Piloto">Categoria</label>
          <input
            type="text"
            ref={categoria}
            class="form-control"
            placeholder="Categoria do Piloto"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => {
            editPiloto(
              id,
              nomePiloto.current.value,
              numPiloto.current.value,
              posicao.current.value,
              categoria.current.value
            );
            navigate("/index");
          }}
        >
          Editar
        </button>
      </form>
    </>
  );
}
