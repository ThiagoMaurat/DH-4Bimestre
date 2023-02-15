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

interface QueryParams {
  id: string;
}

export default function index() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const { query } = useRouter();

  const { id } = query as unknown as QueryParams;
  useEffect(() => {
    if (id) {
      api.get<Pokemon>(`/pokemon/${id}`).then((data) => setPokemon(data.data));
    }
  }, [id]);

  if (pokemon) {
    return (
      <div>
        <p>Rota dinâmica</p>
        <p>{pokemon.name}</p>
        <p>{pokemon.id}</p>
        <img src={pokemon.sprites.back_default}></img>
      </div>
    );
  }
}
