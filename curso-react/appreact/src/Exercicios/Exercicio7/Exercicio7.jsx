// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado


import React from 'react'
import formFields from './formFields'

const Exercicio7 = () => {
    const [data, setData] = React.useState(null);
    const [form, setForm] = React.useState(formFields.reduce((acc, field) => {
        return {
            ...acc, [field.id]: '',
        }
    }, {}));
    

      async function sendForm(form){
        console.log(form);
        await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 // form é o objeto com os dados do formulário
                 body: JSON.stringify(form),
             }).then((response) => {
                 console.log(response.ok);
                 setData(response);
             })
      }


      function handleSubmit(event) {
        event.preventDefault();
        sendForm(form);
      }
    
      function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
      }
      
      
      return (
        
        <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
                <div key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input type={field.type} id={field.id} value={form[field.id]} onChange={handleChange} />
                </div>
            ))}
          
          {data && data['ok'] && <p style={{color: "green"}}>Usuário Cadastrado!</p>}
          {data && !data['ok'] && <p style={{color: "red"}}>Erro ao Enviar!</p>}
          <button>Enviar</button>
        </form>
      );
}

export default Exercicio7
