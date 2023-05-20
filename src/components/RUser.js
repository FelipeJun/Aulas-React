import React, { useContext } from "react";
import Card from "./Card";
import { UserContext } from "../UserContext";

export default function RUser(){
    const user = useContext(UserContext);
    console.log("TO AQUI LA");
    console.log(user);
    return (
        user ? 
            <Card user={user}/>
        :
            <h1>CARREGANDO</h1>
    );
}