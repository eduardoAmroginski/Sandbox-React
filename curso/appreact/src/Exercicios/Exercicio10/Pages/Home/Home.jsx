import React, { useState, useEffect } from 'react';

import Head from '../../Components/Head';
import Card from '../../Components/Card/Card';
import Loading from '../../Components/Loading/Loading';

import style from './Home.module.css';

const Home = () => {
  const [products, setProducts] = useState('');
  const [loading, setLoading] = useState(false);

  async function loadProducts () {
    setLoading(true);
    const url = 'https://ranekapi.origamid.dev/json/api/produto';
    const resp = await fetch(url);
    const data = await resp.json();

    setProducts(data);
    console.log('products', products);
    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (products) {
    return (
      <div className={style.containerCards}>
        <Head title='Home' description='Exericio 10 Pagina Home' />
        {products.map((product, index) => (<Card key={index} data={product} />))}
      </div>
    );
  } else {
    return null;
  }
};

export default Home;
