import React from 'react';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dogs | Home</title>
        <meta name='description' content='Essa é a descrição da Home usando o Helmet' />
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous' />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a Home</p>
      <Link to='produto/notebook'>Notebook</Link>{' | '}
      <Link to='produto/smartphone'>Smartphone</Link> {' | '}
      <Link to='produto/tablet'>Tablet</Link>
    </div>
  );
};

export default Home;
