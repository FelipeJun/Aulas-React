import React, { useState } from "react";

export default function Get() {
  const [user, setUsers] = useState();
  function Get() {
    fetch("http://127.0.0.1:3001/usuarios", {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        console.log(typeof json);
        console.log(json[0]);
        setUsers(json[0]);
      });
  }

  return user ? (
    <>
      <button onClick={Get}>LISTAR</button>
      <p>USUARIO É: {user.nome}</p>
    </>
  ) : (
    <button onClick={Get}>LISTAR</button>
  );
}
