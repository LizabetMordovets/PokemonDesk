import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1 className={s.heading}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvantages and bilities</p>
          <Button onClick={() => {}}>See pokemons</Button>
        </div>

        <div>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
