import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Contato from './Pages/Contato/Contato';
import Produto from './Pages/Produto/Produto';

import Home from './Pages/Home/Home';

import styles from './Exercicio10.module.css';

const Exercicio10 = () => {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contato' element={<Contato />} />
          <Route path='produto/:id' element={<Produto />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Exercicio10;
