export function createPiloto(nomePiloto, numPiloto, posicao, categoria){
    fetch('http://127.0.0.1:3001/pilotos',
    {
        method: "POST",
        body: JSON.stringify({ "nomePiloto": nomePiloto, "numPiloto": numPiloto, "posicao": posicao, "categoria": categoria }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((data) => data.json())
    .then((json) => {
        alert(json);
    });
}