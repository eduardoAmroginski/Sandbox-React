import React from 'react'

import foto from '../../../img/foto.jpg' //Usando desta forma, não há diferença de como chamar o tipo de imagem.
import dog from '../../../img/dog.svg'
import { ReactComponent as DOG } from '../../../img/dog.svg' //Chamando desta forma, o código svg é injetado
const CssImagesExemple1 = () => {
    return (
        <div>
            <img src={dog} alt="Cachorro" />
            <DOG />
            <img src={foto} alt="Cachorro" />
        </div>
    )
}

export default CssImagesExemple1
