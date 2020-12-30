import React from "react";
import Exercicio1 from "./Exercicios/Exercicio1";
import Exercicio2 from "./Exercicios/Exercicio2";
import Exercicio3 from "./Exercicios/Exercicio3/Exercicio3";
import Exercicio4 from "./Exercicios/Exercicio4/Exercicio4";
import Footer from "./Footer";
import Form from "./Form/Form";
import Header from "./Header";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto} {children}
    </h1>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Titulo cor="green" texto="Exercicios">
        de React
      </Titulo>
      {/* <Exercicio1 /> */}
      {/* <Exercicio2 /> */}
      {/* <Exercicio3 /> */}
      {/* <Exercicio4 /> */}
      <Form />
      <Footer />
    </>
  );
};

export default App;
