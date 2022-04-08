import React from 'react'

// Reatividade

const UseStateExemple4 = () => {
    const [items, setItems] = React.useState(['Item 1', 'Item 2']);
  
    function handleClick() {
      // Errado. Modifique o estado apenas com a função de atualização (setItems)
      items.push('Novo Item');
    }
  
    function handleClickReativo() {
      // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
      setItems([...items, 'Novo Item']);
    }
  
    return (
      <>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        <button onClick={handleClick}>Adicionar Item</button>
        <button onClick={handleClickReativo}>Adicionar Reativo</button>
      </>
    );
  };
  
  export default UseStateExemple4;