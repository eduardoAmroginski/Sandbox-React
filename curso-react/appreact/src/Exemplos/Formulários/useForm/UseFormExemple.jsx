import React from 'react'
import useForm from './Hooks/useForm'
import Input from './Input'

const UseFormExemple = () => {
    const cep = useForm('cep');
    const email = useForm('email');
    const senha = useForm('password');
    const nome = useForm();
    const sobrenome = useForm(false);

    function handleSubmit(event) {
      event.preventDefault();
      if (cep.validate() && email.validate() && nome.validate()) {
        console.log('Enviar');
      } else {
        console.log('Não enviar');
      }
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <Input label="Nome" id="nome" type="text" {...nome} />
        <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
        <Input
          label="CEP"
          id="cep"
          type="text"
          placeholder="00000-000"
          {...cep}
        />
        <Input
          label="Email"
          id="email"
          type="text"
          placeholder="fulano@email.com"
          {...email}
        />
        {/* <Input
          label="Senha"
          id="senha"
          type="password"
          placeholder=""
          {...senha}
        /> */}

        <button>Enviar</button>
      </form>
    );
};

export default UseFormExemple
