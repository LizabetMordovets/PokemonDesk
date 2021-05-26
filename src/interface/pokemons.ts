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
  }