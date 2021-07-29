import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import Head from '../../Components/Head';

import styles from './Produto.module.css';

import '../../src/Animation.css';

const Produto = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  async function loadProducts () {
    setLoading(true);
    const url = `https://ranekapi.origamid.dev/json/api/produto/${params.id}`;
    const resp = await fetch(url);
    const data = await resp.json();

    setData(data);
    console.log('data', data);
    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <div className={styles.container}>
        <Head title={data.nome} description={`Produto ${data.nome} : ${data.descricao}`} />
        <div className={`animeLeft ${styles.containerImage}`}>
          {data.fotos.map((image, index) => (<img className={styles.customImage} key={index} src={image.src} alt={image.title} />))}
        </div>
        <div className={`animeLeft ${styles.containerInfos}`}>
          <h3 className={styles.title}>{data.nome}</h3>
          <span className={data.vendido === 'true' ? styles.sold : styles.price}>
            {data.vendido === 'true' ? 'Vendido' : `R$ ${data.preco}`}
          </span>
          <p className={styles.description}>
            {data.descricao}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Produto;
