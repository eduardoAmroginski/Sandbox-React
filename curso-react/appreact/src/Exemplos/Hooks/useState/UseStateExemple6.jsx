import React from 'react'

// Callback Valor Inicial

const UseStateExemple6 = () => {
    // Callback no estado inicial, só será executado na criação do componente
    const [ativo, setAtivo] = React.useState(() => {
      const ativoLocal = window.localStorage.getItem('ativo');
      return ativoLocal;
    });
  
    function handleClick() {
      setAtivo((anterior) => !anterior);
    }
  
    return (
      <button onClick={handleClick}>
        {ativo ? 'Está Ativo' : 'Está Inativo'}
      </button>
    );
  };
  
export default UseStateExemple6;