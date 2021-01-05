import React from 'react'

const FormMultiFieldsExemple = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log(nome, email);
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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button>Enviar</button>
      </form>
    );
}

export default FormMultiFieldsExemple
