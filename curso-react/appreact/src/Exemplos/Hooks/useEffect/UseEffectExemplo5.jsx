import React from "react"
import Produto from "./Produto";

// Antes de desmontar

const UseEffectExemplo5 = () => {
    const [ativo, setAtivo] = React.useState(false);
  
    return (
      <div>
        <p>Meu App</p>
        <button onClick={() => setAtivo(!ativo)}>Abrir</button>
        {ativo && <Produto />}
      </div>
    );
  };
  
export default UseEffectExemplo5;