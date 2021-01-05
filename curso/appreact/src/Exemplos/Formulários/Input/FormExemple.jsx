import React from 'react'

// Form

const FormExemple = () => {
    const [nome, setNome] = React.useState('');

    function handleSubmit(event) {
      event.preventDefault();
      console.log(nome);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <button>Enviar</button>
      </form>
    );
}

export default FormExemple
