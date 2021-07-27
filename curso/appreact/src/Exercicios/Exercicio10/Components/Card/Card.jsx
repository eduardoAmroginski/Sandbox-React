import React from 'react';
import { Link } from 'react-router-dom';

import style from './Card.module.css';

const Card = ({ data, ...props }) => {
  return (
    <Link to={'produto/' + data.id} className={style.cardBox} {...props}>
      <img src={data.fotos[0].src} alt={data.fotos[0].titulo} className={style.cardImage} />
      <h4 className={style.cardTitle}>{data.nome}</h4>
    </Link>
  );
};

export default Card;
