// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import React, { useState, useEffect } from 'react';
import Product from './Fragments/Product';

const Exercicio5 = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const localStorage = window.localStorage.getItem('produto');
    if (localStorage !== null) {
      setProduto(localStorage);
    }
  }, []);

  useEffect(() => {
    if (produto) {
      window.localStorage.setItem('produto', produto);
    }
  }, [produto]);

  function handleClick (event) {
    const label = event.target.innerText;
    window.localStorage.setItem('produto', label);
    setProduto(label);
  }

  return (
    <div>
      <h1>Preferencia: {produto}</h1>
      <button onClick={handleClick} style={{ margin: '0.5rem' }}>notebook</button>
      <button onClick={handleClick} style={{ margin: '0.5rem' }}>smartphone</button>
      {produto && <Product preferencia={produto} />}
    </div>
  );
};

export default Exercicio5;
