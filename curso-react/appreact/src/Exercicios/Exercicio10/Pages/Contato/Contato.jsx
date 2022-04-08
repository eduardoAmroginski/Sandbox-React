import React from 'react';
import Head from '../../Components/Head';

import styles from './Contato.module.css';
import '../../src/Animation.css';

const Contato = () => {
  return (
    <div className={styles.container}>
      <Head title='Contato' description='Exericio 10 Pagina Contato' />
      <div className={`animeLeft ${styles.containerImage}`}>
        <img className={styles.customImage} src='https://radiocaxias.com.br//imagens/novidade/volumedotelefone-31849639.jpg' alt='contato' />
      </div>
      <div className='animeLeft'>
        <h3>Entre em contato</h3>
        <ul>
          <li>eduardo@teste.com.br</li>
          <li>99999-9999</li>
          <li>Rua dos bobos, 0</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
