export function editPiloto(id, nomePiloto, numPiloto, posicao, categoria){
    fetch('http://127.0.0.1:3001/pilotos',
    {
        method: "PUT",
        body: JSON.stringify({ "_id": id, "nomePiloto": nomePiloto, "numPiloto": numPiloto, "posicao": posicao, "categoria": categoria}),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((data) => data.json())
    .then((json) => {
        alert(json);
    });
}