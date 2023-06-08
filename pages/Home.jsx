import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SimpleSlider } from '../components/SimpleSlider';

const Home = () => {
  return (
    <>
      <section className='section'>
        <h2>Accueil</h2>
        <div className='sliderHome'>
          <SimpleSlider />
        </div>
        <div>
          <h3>
            Bienvenue sur le site de l'association Autour Des Jardins De
            Chéreng.
          </h3>
          <p className='introduceText'>
            Ce site vous permettra de mieux connaître l'association et ses
            activités. Vous trouverez nos coordonnées sur la page{' '}
            <Link to={'/Contact'} className='linkPage'>
              {' '}
              nous contacter
            </Link>
            . Sur cette page, vous trouverez également le mail de l'association
            pour nous contacter (en cliquant sur l'adresse votre messagerie
            s'ouvrira automatiquement).
          </p>
          <p>
            Vous aurez également la possibilité de consulter un calendrier du
            potager présenté par nom de plant et classé par ordre
            alphabétiquement à la page{' '}
            <Link to={'/Plantations'} className='linkPage'>
              plantations
            </Link>
          </p>

          <p>
            Ce site a été créé bénévolement et peut présenter des défauts. Son
            but étant de vous offrir la meilleure expèrience possible, n'hésitez
            pas à nous faire part des problèmes rencontrés avec bienveillance.
            Autour Des Jardins de Chéreng vous souhaite une bonne navigation et
            vous remercie de votre visite.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
