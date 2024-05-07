import {create} from 'zustand'

type PokemonStore = {
  pokemon: Pokemon;
  setPokemon: (pokemon: Pokemon) => void;
}

const initialData: Pokemon = {
  name: "",
  id: 0,
  images: "",
  sprites: {
    front_default: "",
    other: {
      dream_world: {
        front_default: ""
      }
    }
  },
  types: [],
  stats: []
}

export const usePokemon = create<PokemonStore>((set) => ({
  pokemon: initialData,
  setPokemon: (pokemon) => set({pokemon}),
}))