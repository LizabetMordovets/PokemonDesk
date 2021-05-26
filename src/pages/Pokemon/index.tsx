import React from 'react';
import useData from '../../hook/getData';
import { IPokemon } from '../../interface/pokemons';

export interface IPokemonProps {
  id: string | number;
}

const PokemonPage: React.FC<IPokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemon>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Pokemon ID is equal to {data?.name}</div>;
};

export default PokemonPage;