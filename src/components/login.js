import { useContext, useState } from "react";
import { UsuarioContext } from "../usuarioContext";

export default function Login({setLogado}){
    const dbUser = useContext(UsuarioContext);
    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();

    function verificaLogin(){
        dbUser.map((user) => <>
            {user.usuario === usuario && user.senha === senha &&
            setLogado({nick: user.nick})}
            </>
        )
    }
    return(
        <div className="container">
        <div className="row my-2">
            <div className="col-4 d-flex">
                <h4 className="mx-2">Usuário: </h4>
                <input type="text" placeholder="Digite seu usuário" onChange={(e) => setUsuario(e.target.value)}></input>
            </div>
            <div className="col-4 d-flex">
                <h4 className="mx-2">Senha: </h4>
                <input type="text" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)}></input>
            </div>
            <button className="col-1" onClick={verificaLogin}>Entrar</button>
        </div>
        </div>
    );
}