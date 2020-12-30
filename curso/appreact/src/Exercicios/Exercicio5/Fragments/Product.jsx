import React, { useEffect, useState } from 'react'

const Product = ({preferencia}) => {
    const [dados, setDados] = useState(null)


    async function fetchProduct(preferencia){
        await fetch(`https://ranekapi.origamid.dev/json/api/produto/${preferencia}`)
          .then((response)=> response.json())
          .then((json) => setDados(json) )
      }

    useEffect(() => {
       fetchProduct(preferencia)
        console.log("useEffect Produto")
    }, [preferencia])

    if (dados === null) return null
    return (
        <div className="card" style={{width: "18rem", textAlign: "center", border: '1px solid lightgray'}}>
            <img style={{maxHeight: "200px", width: "100%", objectFit: "cover", objectPosition: "center"}} src={dados.fotos[0].src} alt={dados.fotos[0].titulo}/>
            <h3>{dados.nome}</h3>
            <h3>R$ {dados.preco}</h3>
        </div>
    )
}

export default Product