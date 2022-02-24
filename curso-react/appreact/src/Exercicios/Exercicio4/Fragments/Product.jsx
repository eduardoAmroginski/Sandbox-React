import React from 'react'

const Product = ({dados}) => {
    return (
        <div className="card" style={{width: "18rem", textAlign: "center", border: '1px solid lightgray'}}>
            <img style={{maxHeight: "200px", width: "100%", objectFit: "cover", objectPosition: "center"}} src={dados.fotos[0].src} alt={dados.fotos[0].titulo}/>
            <h3>{dados.nome}</h3>
            <h3>R$ {dados.preco}</h3>
        </div>
    )
}

export default Product