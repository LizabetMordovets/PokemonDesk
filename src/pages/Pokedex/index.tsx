import React, { useState, useEffect } from 'react';

import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import req from '../../utils/request';
import s from './Pokedex.module.scss';

const usePokemons = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await req('getPokemons');
        setData(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsloading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
};

const PokedexPage = () => {
  const { isLoading, isError, data } = usePokemons();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something wrong...</div>;

  return (
    <div className={s.root}>
      <Layout>
        <div className={s.wrapper}>
          <Heading type="h3">
            {data.total} <b>Pokemons</b> for you to choose your favorite
          </Heading>
          <div className={s.pokemonsGrid}>
            {data.pokemons.map((pokemon: any) => {
              const { id, name, stats, types, img } = pokemon;
              return (
                <PokemonCard
                  key={id}
                  name={name}
                  attack={stats.attack}
                  defense={stats.defense}
                  img={img}
                  types={types}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
