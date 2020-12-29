// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

import React from "react";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const Exercicio1 = () => {
  const dados = luana;

  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  const compras = dados.compras.map((item) => <dd>{item.nome}</dd>);

  return (
    <>
      <h3>Exercicio 1</h3>
      <p>
        Cliente: <b>{dados.cliente}</b>
      </p>
      <p>
        Idade: <b>{dados.idade}</b>
      </p>
      <p>
        Situação:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativo" : "Inativo"}
        </span>{" "}
      </p>
      <dl>
        <dt>Compras: </dt>
        {compras}
      </dl>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você gastou muito!</p>}
    </>
  );
};

export default Exercicio1;
