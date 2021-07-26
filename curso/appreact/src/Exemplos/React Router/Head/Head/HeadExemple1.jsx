import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Login from './Pages/Login';
import Produto from './Pages/Produto';
import Page404 from './Pages/Page404';

import ProdutoDescricao from './Pages/Produto/ProdutoDescricao';
import ProdutoAvaliacao from './Pages/Produto/ProdutoAvaliacao';
import ProdutoCustomizado from './Pages/Produto/ProdutoCustomizado';

import Header from './Components/Header';

const HeadExemple1 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='login' element={<Login />} />
        <Route path='produto/:id/*' element={<Produto />}>

          <Route path='/' element={<ProdutoDescricao />} />
          <Route path='avaliacao' element={<ProdutoAvaliacao />} />
          <Route path='customizado' element={<ProdutoCustomizado />} />

        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HeadExemple1;
