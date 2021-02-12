import React from 'react'
import styled from 'styled-components';


// Usando Props para alterar as cores

const Preco = styled.p`
  background: ${(props) => props.cor};
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const CssStyledComponentsExemple2 = () => {
    function template(value, total) {
        console.log(value);
        console.log(total);
      }
      const total = 10;
      template`São ${total} no total`;
    
      return (
        <div>
          <Preco cor="#53d956">R$ 2999</Preco>
          <Preco cor="#84e">R$ 1999</Preco>
        </div>
      );
}

export default CssStyledComponentsExemple2
