import React from 'react';
import { useParams, NavLink, Routes, Route, Outlet } from 'react-router-dom';

import ProdutoAvaliacao from './Produto/ProdutoAvaliacao';
import ProdutoCustomizado from './Produto/ProdutoCustomizado';
import ProdutoDescricao from './Produto/ProdutoDescricao';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>

      <nav>
        <NavLink to=''>Descrição </NavLink> |
        <NavLink to='avaliacao'> Avaliação </NavLink> |
        <NavLink to='customizado'> Customizado</NavLink>
      </nav>
      <Outlet />

      {/* <Routes>
        <Route path='/' element={<ProdutoDescricao />} />
        <Route path='avaliacao' element={<ProdutoAvaliacao />} />
        <Route path='customizado' element={<ProdutoCustomizado />} />
      </Routes> */}

    </div>
  );
};

export default Produto;

// Outlet substitui a necessidade de mantermos o Routes dentro deste arquivo. Porém para manter algo mais organizado, seja interessante manter todas as sub rotas neste arquivo.
