import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPiloto } from "../Functions/createPiloto";

export default function CriarPage() {
  const navigate = useNavigate();
  const nomePiloto = useRef(null);
  const numPiloto = useRef(null);
  const posicao = useRef(null);
  const categoria = useRef(null);

  return (
    <>
      <h1>Novo Piloto</h1>
      <form class="m-3">
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
          class="btn btn-primary mt-2"
          onClick={() => {
            createPiloto(
              nomePiloto.current.value,
              numPiloto.current.value,
              posicao.current.value,
              categoria.current.value
            );
            navigate("/index");
          }}
        >
          Criar
        </button>
      </form>
    </>
  );
}
