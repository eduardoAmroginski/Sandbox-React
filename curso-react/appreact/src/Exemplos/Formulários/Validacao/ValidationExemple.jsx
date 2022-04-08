import React from 'react'
import Input from './Input';

//  Validação - onBlur e onSubmit
const ValidationExemple = () => {
    const [cep, setCep] = React.useState('');
    const [error, setError] = React.useState(null);
  

    const banlist = ['00000-000',
                     '11111-111',
                     '22222-222',
                     '33333-333',
                     '44444-444',
                     '55555-555',
                     '66666-666',
                     '77777-777',
                     '88888-888',
                     '99999-999',
                     '00000000',
                     '11111111',
                     '22222222',
                     '33333333',
                     '44444444',
                     '55555555',
                     '66666666',
                     '77777777',
                     '88888888',
                     '99999999']

    function validateCep(value) {
      if (value.length === 0) {
        setError('Preencha um valor');
        return false;
      } else if (!/^\d{5}-?\d{3}$/.test(value)) {
        setError('Preencha um cep válido');
        return false;
      }else if (banlist.includes(value)){
        setError('Cep inválido!');
        return false;
      } else {
        setError(null);
        return true;
      }
    }
  
    function handleBlur({ target }) {
      validateCep(target.value);
    }
  
    function handleChange({ target }) {
      if (error) validateCep(target.value);
      setCep(target.value);
    }

    function handleSubmit(event) {
      event.preventDefault();
      if (validateCep(cep)) {
        console.log('Enviar');
      } else {
        console.log('Não enviar');
      }
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <Input
          label="CEP"
          id="cep"
          type="text"
          value={cep}
          placeholder = "00000-000"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error && <p>{error}</p>}
        <button>Enviar</button>
      </form>
    );
}

export default ValidationExemple
