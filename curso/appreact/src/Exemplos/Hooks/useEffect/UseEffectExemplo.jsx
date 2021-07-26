import React from 'react'

const UseEffectExemplo = () => {
    const [contar, setContar] = React.useState(0);
  
    React.useEffect(() => {
      console.log('Ocorre ao renderizar e ao atualizar');
    });
  
    return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
  };

  export default UseEffectExemplo;
  