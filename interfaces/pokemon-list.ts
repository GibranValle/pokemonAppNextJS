export interface PokemonList {
    count:    number;
    next?:     string;
    previous?: string;
    results:  singlePokemon[];
}

export interface singlePokemon {
    name: string;
    url:  string;
    id: number;
    img: string;
}
