// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

import React from "react";
import Header from "./Header";
import Produtos from "./Produtos";
import Home from "./Home";

const Exercicio3 = () => {
  const { pathname } = window.location;
  let Component;
  if (pathname === "/produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }
  return (
    <>
      <Header />
      <Component />
    </>
  );
};

export default Exercicio3;
