import React from 'react'

const UseStateExemple = () => {
    const [ativo, setAtivo] = React.useState(true);
    // É a mesma coisa que:
    // const ativoArray = React.useState(true);
    // const ativo = ativoArray[0];
    // const setAtivo = ativoArray[1];
  
    return (
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>
    );
  };
  
export default UseStateExemple;