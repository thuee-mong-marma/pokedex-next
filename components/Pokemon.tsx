"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/core/Skeleton";
import { useModal } from "@/hooks/useModal";
import { usePokemon } from "@/hooks/usePokemon";

interface PokemonProps {
  pokemon: PokemonData;
}

type PokemonData = {
  name: string;
  url: string;
};

const Pokemon = ({ pokemon }: PokemonProps) => {
  const [pokemonData, setPokemonData] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(false);
  const { openModal } = useModal();
  const { setPokemon } = usePokemon();

  useEffect(() => {
    setIsLoading(true);
    const fetchPokemon = async () => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      // console.log("pokemon data", data);
      setPokemonData(data);
      setIsLoading(false);
    };

    fetchPokemon();
  }, [pokemon.url]);

  const handleClick = () => {
    openModal();
    setPokemon(pokemonData as Pokemon);
  };

  return (
    <div
      className="pokemon-card relative bg-white flex flex-col items-center justify-between gap-y-8 py-8 px-4 cursor-pointer rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
      onClick={handleClick}
    >
      {!pokemonData || isLoading ? (
        <PokemonSkeleton />
      ) : (
        <>
          <div className="w-full flex items-center justify-around text-xl capitalize font-medium">
            <h2 className="text-2xl text-neutral-700">{pokemonData.name}</h2>
            <p>#{pokemonData.id}</p>
          </div>
          <div className="flex flex-1">
            <Image
              src={pokemonData.sprites["other"]["dream_world"]["front_default"]}
              width={100}
              height={100}
              alt={pokemonData.name}
              className="self-center"
            />
          </div>
          <div className="flex gap-2 mt-auto">
            {pokemonData.types.map((item, index) => (
              <div
                key={index}
                className="py-1 px-2 rounded-md text-white capitalize bg-neutral-500"
              >
                {item.type.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const PokemonSkeleton = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[100px]"/>
        <Skeleton className="h-8 w-[40px]"/>
      </div>
      <div className="flex items-center justify-center">
        <Skeleton className="h-28 w-28"/>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Skeleton className="h-8 w-16"/>
        <Skeleton className="h-8 w-16"/>
      </div>
    </div>
  );
};

export default Pokemon;
