import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPokemonById } from "../RTK/selector";

export default function Detail() {
    const { PokemonId } = useParams();
    const pokemon = useSelector(selectPokemonById(Number(PokemonId)));
    return (
        <div className="flex flex-col justify-center items-center border border-[gray] p-[30px] rounded-[10px]">
            <div className="text-[28px] mb-[10px]">{pokemon.name}</div>
            <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
            <div className="w-[200px]" src={pokemon.front} />
        </div>
    );
} 
 