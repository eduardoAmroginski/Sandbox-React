/*

Ao importar um componentes, os estilos importados do 
mesmo são automaticamente adicionados ao CSS final da 
build. Independente de você utilizar o componente ou não.

*/



import React from 'react'
import Title from './Componentes/Title/Title'

const CssImportExemple2 = () => {
    return (
        <div className="container">
        <Title text="Meu título" />
        {/* <p className="text">Meu site</p> */}
      </div>
    )
}

export default CssImportExemple2
