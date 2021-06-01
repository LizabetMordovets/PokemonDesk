export interface IPokemons {
    total: number;
    pokemons: any[];
  }
  
  export interface IPokemon {
    abilities: string[];
    base_experience: number;
    height: number;
    id: number;
    img: string;
    is_default: boolean;
    name: string;
    name_clean: string;
    order: number;
    stats: {
      attack: number;
      defense: number;
      hp: number;
      'special-attack': number;
      'special-defense': number;
      speed: number;
    };
    types: string[];
  };


export type PokemonRequest = typeof pokemonsData;

const pokemonsData = {
  name_clean: 'bulbasaur',
  abilities: ['overgrow', 'chlorophyll'],
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    'special-attack': 65,
    'special-defense': 65,
    speed: 45,
  },
  types: ['grass', 'poison'],
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  name: 'bulbasaur',
  base_experience: 64,
  height: 7,
  id: 1,
  is_default: true,
  order: 1,
  weight: 69,
};