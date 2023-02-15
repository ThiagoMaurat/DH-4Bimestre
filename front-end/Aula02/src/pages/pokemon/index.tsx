import { api } from "@/src/services";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  id: number;
  sprites: {
    back_default: string;
  };
}

export default function index() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const { push } = useRouter();

  useEffect(() => {
    const fetchDate = async () => {
      const { data } = await api.get<Pokemon>(`/pokemon/1`);
      setPokemon(data);
    };
    fetchDate();
  }, []);

  if (pokemon) {
    return (
      <div onClick={() => push(`pokemons/${pokemon.id}`)}>
        <p>{pokemon.name}</p>
        <p>{pokemon.id}</p>
        <img src={pokemon.sprites.back_default}></img>
      </div>
    );
  }
}
