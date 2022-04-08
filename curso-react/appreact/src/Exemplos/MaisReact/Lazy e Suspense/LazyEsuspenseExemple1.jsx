import React from "react";
// import Contato from "./Components/Contato";

const Contato = React.lazy(() => import("./Components/Contato"));

const LazyEsuspenseExemple1 = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      {ativo && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
};

export default LazyEsuspenseExemple1;
