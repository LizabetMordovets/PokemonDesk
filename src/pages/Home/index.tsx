import React from 'react';
import { navigate } from 'hookrouter';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';
import { LinkEnum } from '../../routes';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type="h1" className={s.heading}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and bilities</p>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)} color="green" size="small">
            See pokemons
          </Button>
        </div>

        <div>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
