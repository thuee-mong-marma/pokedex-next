type Pokemon = {
  name: string;
  id: number;
  images: string;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      }
    }
  }
  types: PokemonType[];
  stats: PokemonStat[]
}

type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}
type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}