import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams(); // Pega o id que foi definido como parametro no componente Route
  const location = useLocation(); // no Location fica todas as informações da rota atual. O useLocation é utilizado para pegar dados de search.

  // Ambos os hooks (useParams e useLocation), nos permitem pegar dados para auxiliar em possivel fetch.

  console.log('location', location);

  const search = new URLSearchParams(location.search);
  console.log('search', search.get('memoria'));

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Produto;
