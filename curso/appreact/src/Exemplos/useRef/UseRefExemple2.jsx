import React from "react";

const UseRefExemple2 = () => {
    const [comentarios, setComentarios] = React.useState([]);
    const [input, setInput] = React.useState('');
    const inputElement = React.useRef();
  
    function handleClick() {
      setComentarios((comentarios) => [...comentarios, input]);
      setInput('');
      inputElement.current.focus();
    }
  
    return (
      <div>
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario}>{comentario}</li>
          ))}
        </ul>
        <input
          type="text"
          value={input}
          ref={inputElement}
          onChange={({ target }) => setInput(target.value)}
        />
        <br />
        <button onClick={handleClick}>Enviar</button>
      </div>
    );
  };
  
  export default UseRefExemple2;