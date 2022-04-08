import React from 'react'
import Checkbox from './Checkbox';
import Input from './Input'
import Radio from './Radio';
import Select from './Select';

const FormComponentsExemple = () => {

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [produto, setProduto] = React.useState('');
    const [genero, setGenero] = React.useState('');
    const [cor, setCor] = React.useState('Amarelo');
    const [linguagens, setLinguagens] = React.useState([]);
    const [termos, setTermos] = React.useState([]);

    return (
        <form>

            <h2>Termos</h2>
            <Checkbox options={['Li e aceito os termos']} value={termos} setValue={setTermos}/>

            <h2>Checkbox</h2>
            <Checkbox options={['JavaScript', 'PHP', 'Ruby']} value={linguagens} setValue={setLinguagens}/>

            <h2>Genero</h2>
            <Radio options={['Masculino', 'Feminino', 'Outros']} value={genero} setValue={setGenero} />
            <h2>Cores</h2>
            <Radio options={['Amarelo', 'Lilás', 'Verde']} value={cor} setValue={setCor} />

            <Select options={['smartphone', 'notebook', 'tablet']} value={produto} setValue={setProduto} />
            <Input id="nome" label="Nome" value={nome} setValue={setNome} required/>
            <Input id="email" label="Email" value={email} setValue={setEmail}/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormComponentsExemple
