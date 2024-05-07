"use client";

import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
import Loader from "./Loader";

const Pokemons = () => {
  const totalPokemons = 1118;
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pokemonsPerPage] = useState<number>(12);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonsPerPage}&offset=${
          currentPage * pokemonsPerPage
        }`
      );
      const { results } = await response.json();
      // console.log("data", results);
      setPokemons(results);
    };

    fetchPosts();
  }, [currentPage, pokemonsPerPage]);

  if (!pokemons.length) {
    return <div className="flex items-center justify-center py-20">
      <Loader />
    </div>;
  }

  return (
    <div>
      <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemons.map((pokemon, index) => (
          <Pokemon pokemon={pokemon} key={index} />
        ))}
      </div>
      <Pagination
        postsPerPage={pokemonsPerPage}
        totalPosts={1118}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Pokemons;
