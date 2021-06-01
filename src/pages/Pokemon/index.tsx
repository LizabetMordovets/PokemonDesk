import React, { FC, useState, useEffect } from 'react';

import useData from '../../hook/getData';

import Heading from '../../components/Heading';
import Loader from '../../components/Loader';
import s from './pokemon.module.scss';

export interface IPokemonProps {
  id: string | number;
};


const PokemonPage: FC<IPokemonProps> = ({ id }) => {
    const { data, isLoading } = useData('getPokemon', { id });
    const [pokemon, setPokemon] = useState<any | null>(null);

    useEffect(() => {
        setPokemon(data);
      }, [data]);

    if (isLoading) {
      return <Loader />;
    }
  console.log('#3data', pokemon)
    return (
      <div className={s.root}>
        {pokemon ? (
          <div className={s.pokemonCard}>
            <div className={s.pokemonImage}>
              <img className={s.pokemonPic} src={pokemon.img} alt="pokemon" />
              <div className={s.pokemonAbilities}>
                <div className={s.labelWrap}>
                  {pokemon.types.map((type: string) => (
                    <span key={type} className={s.label}>
                      {pokemon.type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={s.pokemonStats}>
              <div className={s.pokemonInfo}>
                <Heading className={s.pokemonName} type="h3">
                  {pokemon.name}
                </Heading>
                <div className={s.pokemonGenAndCircle}>
                  <Heading className={s.pokemonGeneration} type="h4">
                    Generation 1
                  </Heading>
                  <div className={s.pokemonCircle}>
                    <Heading type="p" className={s.pokemonState}>
                      578
                    </Heading>
                  </div>
                </div>
              </div>
              <div className={s.pokemonAbilitiesText}>
                <Heading type="p" className={s.pokemonState}>
                  Abilities
                  {pokemon?.abilities.map((el) => (
                            <span key={el}>{el} </span>
                    ))}
                </Heading>
                <Heading type="p" className={s.pokemonStateText}>
                  Overgrow - Chlorophyll
                </Heading>
              </div>
              <div className={s.pokemonHealthAndExp}>
                <div className={s.pokemonHealth}>
                  <Heading type="p" className={s.pokemonState}>
                    Healthy Points
                    <b>{pokemon?.stats.hp}</b>
                  </Heading>
  
                  <Heading type="p" className={s.pokemonNums}>
                    1 000 000
                  </Heading>
                  <div className={s.pokemonProgressBar}>
                    <div
                      className={s.pokemonProgressBarReady}
                      style={{
                        width: '80%',
                        background: 'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)',
                      }}
                    />
                  </div>
                </div>
                <div className={s.pokemonExp}>
                  <Heading type="p" className={s.pokemonState}>
                    Experience
                    <b>{pokemon?.base_experience}</b>
                  </Heading>
  
                  <Heading type="p" className={s.pokemonNums}>
                    1 000 000
                  </Heading>
                  <div className={s.pokemonProgressBar}>
                    <div
                      className={s.pokemonProgressBarReady}
                      style={{
                        width: '96%',
                        background: 'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)',
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={s.pokemonDefAndAttack}>
                <dl className={s.pokemonDefAndAttackItem}>
                  <dd>
                    <span>{pokemon?.stats.defense}</span>
                  </dd>
                  <dt>Defence</dt>
                </dl>
  
                <dl className={s.pokemonDefAndAttackItem}>
                  <dd>
                    <span>{pokemon?.stats.attack}</span>
                  </dd>
                  <dt>Attack</dt>
                </dl>
  
                <dl className={s.pokemonDefAndAttackItem}>
                  <dd>
                    <span>{pokemon?.stats['special-attack']}</span>
                  </dd>
                  <dt>Sp Attack</dt>
                </dl>
  
                <dl className={s.pokemonDefAndAttackItem}>
                  <dd>
                    <span>{pokemon?.stats['special-defense']}</span>
                  </dd>
                  <dt>Sp Defence</dt>
                </dl>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
  };

  export default PokemonPage;