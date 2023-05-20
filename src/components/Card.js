import React from "react";

export default function Card({ user }) {
  console.log("TO AQUI");
  console.log(user);
  return (
    <div class="card">
      <img class="card-img-top mx-auto" src={user.picture.large} alt="Card image cap" style={{width:"500px"}}/>
      <div class="card-body text-center">
        <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
        <h2>Email: {user.email}</h2>
        <h3>Tel: {user.cell}</h3>
        <h4>Endereço: {user.location.city}, {user.location.country}</h4>
        <h5>Aniversário: {user.dob.date}</h5>
        <h5> Idade: {user.dob.age}</h5>
        <p class="card-text"></p>
      </div>
    </div>
  );
}