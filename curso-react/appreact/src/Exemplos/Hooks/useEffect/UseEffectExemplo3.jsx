// Componene Montou
import React from 'react'

const UseEffectExemplo3 = () => {
    const [contar, setContar] = React.useState(0);
    const [dados, setDados] = React.useState(null);
  
    React.useEffect(() => {
      // se o fetch estivesse fora do useEffect, toda vez que o componente
      // fosse atualizado, o mesmo seria executado
      fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
        .then((response) => response.json())
        .then((json) => setDados(json));
    }, []);
  
    return (
      <div>
        {dados && (
          <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco * contar}</p>
          </div>
        )}
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>
    );
  };

  export default UseEffectExemplo3;
  