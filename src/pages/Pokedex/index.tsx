import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {A} from 'hookrouter';

import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import req from '../../utils/request';
import s from './Pokedex.module.scss';
import {IPokemons} from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';


interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 500);


  const dispatch = useDispatch();
  const PokemonTypes = useSelector(getPokemonTypes);
  const IsTypesLoading = useSelector(getPokemonTypesLoading);

  useEffect(() => {
    dispatch(getTypesAction());
}, []);

if (isLoading) {
    return <Loader />;
}

if (isError) {
    return <Error />;
}
  
  const {
     isLoading,
      isError,
       data } = useData<IPokemons>('getPokemons', query,[debouncedValue]);

  const handleSearchChahge = (e: React.ChangeEvent<HTMLInputElement>) => {
   setSearchValue(e.target.value);
   setQuery((state: IQuery) => ({
     ...state,
     name: e.target.value,
   }))
  }

 
  if (isError) return <div>Something wrong...</div>;

  return (
    <div className={s.root}>
      <Layout>
        <div className={s.wrapper}>
          <Heading type="h3">
            {!isLoading  && data && data.total} <b>Pokemons</b> for you to choose your favorite
          </Heading>
          <div className={s.inputStyle}>
            <input type="text" value={searchValue} onChange={handleSearchChahge}/>
          </div>
          <div className={s.pokemonsGrid}>
            {!isLoading && data && data.pokemons.map((pokemon: any) => {
              const { id, name, stats, types, img } = pokemon;
              return (
                <A key={id} href={`/pokemon/${id}`}>
                  <PokemonCard
                    key={id}
                    name={name}
                    attack={stats.attack}
                    defense={stats.defense}
                    img={img}
                    types={types}
                  />
                </A>
              );
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;