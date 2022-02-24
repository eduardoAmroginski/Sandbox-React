import React from 'react';

// Múltiplos Efeitos

const UseEffectExemplo4 = () => {
    const [contar, setContar] = React.useState(0);
    const [modal, setModal] = React.useState(false);
  
    React.useEffect(() => {
      document.title = 'Total ' + contar;
    }, [contar]);
  
    React.useEffect(() => {
      setContar(0);
    }, [modal]);
  
    return (
      <div>
        {modal && <p>Meu Modal</p>}
        <button onClick={() => setModal(!modal)}>Modal</button>
        <hr />
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>
    );
  };
  
  export default UseEffectExemplo4;