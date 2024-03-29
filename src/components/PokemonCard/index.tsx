import React from 'react';

import Heading from '../Heading';
import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  name: string;
  attack: number;
  defense: number;
  img: string;
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, attack, defense, img, types }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type="h5" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type, i) => (
            <span className={s.label}>{type}</span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
