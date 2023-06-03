import React from 'react';
import { Link } from 'react-router-dom';
import reglement from '.././assets/Jardins-reglement-interieur.pdf';
import Form from '../components/Form';
import Goup from '../components/Goup';
import { GiBirdHouse } from 'react-icons/gi';
import { GoMail, GoHome } from 'react-icons/go';
import { SiHomeassistant } from 'react-icons/si';

const Contact = () => {
  return (
    <section className='contactSection'>
      <div className='contactTitle'>
        <h2>Contact</h2>
        <div className='underlineContact'></div>
        <span>
          <GoHome /> Mairie de Chéreng, 66 Route nationale 59152 Chéreng
        </span>
        <span>
          <SiHomeassistant /> rue des tilleuls, Chéreng
        </span>
        <span className='mailPotager'>
          <a href='mailto:potagers.autour.chereng@gmail.com'>
            <GoMail /> potagers.autour.chereng@gmail.com
          </a>
        </span>

        <div className='underlineContact'></div>
        <h4>Prêt à cultiver votre jardin? N'hésitez pas à nous contacter</h4>
        <p>
          Avant tout, consultez le règlement intérieur de l'association{' '}
          <a href={reglement} target='blank'>
            ici
          </a>{' '}
          (vous devrez l'accepter pour vous inscrire)
        </p>
      </div>
      {/* <div className='formEntire'>
        <Form alert={alert} showAlert={showAlert} setToken={setToken} />
      </div> */}

      <Link to='/'>
        <span className='backHome'>
          <GiBirdHouse />
        </span>
      </Link>
      <Goup />
    </section>
  );
};

export default Contact;
