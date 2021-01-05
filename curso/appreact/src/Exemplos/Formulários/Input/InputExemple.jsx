import React from 'react'

// Reatividade

const InputExemple = () => {
    const [nome, setNome] = React.useState('');

    return (
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <p>{nome}</p>
      </form>
    );
}

export default InputExemple
