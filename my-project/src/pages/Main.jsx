import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";

export function Main() {
    const pokemons = useSelector((state) => state.pokemon.data);
    return (
        <>
         {pokemons.map((el) => (
                <Card key={el.id} pokemon={el} />
            ))}
        </>
    );
}
 