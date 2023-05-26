export function deletePiloto(nomePiloto){
    fetch('http://127.0.0.1:3001/pilotos',
        {
            method: "DELETE",
            body: JSON.stringify({ "nomePiloto": nomePiloto}),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((data) => data.json())
        .then((json) => {
            alert(json);
        });
}