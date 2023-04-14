

export default function Home({logado,setLogado}){
    return(
        <div>
            <div className="m-2">
                <h4>Nick: ({logado.nick})</h4>
                <button onClick={() => setLogado(undefined)}>Sair</button>
            </div>
        </div>
    );
}