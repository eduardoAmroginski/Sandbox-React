// Otimizae o código do slide anterior
// Utilizando o array abaixo para mostrar
// cada checkbox na tela

import React from 'react'
import Checkbox from './Checkbox'

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']


const Exercicio8 = () => {
    const [cor, setCor] = React.useState([]);

    return (
        <form>
            <Checkbox options={coresArray}
                value={cor}
                setValue={setCor}
            />
        </form>
    )
}

export default Exercicio8
