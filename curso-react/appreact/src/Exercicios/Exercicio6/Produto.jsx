import React from 'react';
import BtnLimpar from './BtnLimpar';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  const dados = global.produtos;

  console.log(dados);
  return (
    <>
      <section style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dados && dados.map((dado, index) =>
          <div key={index} className='card' style={{ width: '18rem', margin: '.5rem', textAlign: 'center', border: '1px solid lightgray' }}>
            <img style={{ maxHeight: '200px', width: '100%', objectFit: 'cover', objectPosition: 'center' }} src={dado.fotos[0].src} alt={dado.fotos[0].titulo} />
            <h3>{dado.nome}</h3>
            <h3>R$ {dado.preco}</h3>
          </div>
        )}
      </section>
      {/* <button onClick={global.limparDados} >Limpar dados</button> */}
      <BtnLimpar text='Limpar dados' />

    </>
  );
};

export default Produto;
