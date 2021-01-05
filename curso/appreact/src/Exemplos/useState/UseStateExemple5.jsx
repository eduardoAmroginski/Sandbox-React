import React from 'react'

// Callback

const UseStateExemple5 = () => {
    const [ativo, setAtivo] = React.useState(true);
  
    function handleClick() {
      // usando um callback
      setAtivo((anterior) => !anterior);
    }
  
    return (
      <button onClick={handleClick}>
        {ativo ? 'Está Ativo' : 'Está Inativo'}
      </button>
    );
  };
  
export default UseStateExemple5;