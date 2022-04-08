import React from 'react'

// React.StrictMode

const UseStateExemple7 = () => {
    const [contar, setContar] = React.useState(1);
    const [items, setItems] = React.useState(['Item 1']);
  
    function handleClick() {
      setContar((contar) => {
        // setContar possui um efeito colateral.
        setItems((items) => [...items, 'Item ' + (contar + 1)]);
        return contar + 1;
      });
      // Tirar o efeito de dentro do setContar irá concertar o erro
      // setItems((items) => [...items, 'Item ' + (contar + 1)]);
    }
  
    return (
      <>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <button onClick={handleClick}>{contar}</button>
      </>
    );
  };
  
export default UseStateExemple7;