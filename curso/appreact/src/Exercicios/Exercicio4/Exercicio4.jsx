// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado



import React, {useState} from 'react'
import Product from './Fragments/Product'

const Exercicio4 = () => {

    const [dados, setDados] = useState(null);
    const [loading, setLoading] = useState(null);


    async function handleClick(event){
        setLoading(true);
        const label = event.target.innerText;
        const url = `https://ranekapi.origamid.dev/json/api/produto/${label}`
        const resp = await fetch(url);
        const data = await resp.json();
        setDados(data);
        setLoading(false);
    }

    return (
        <div>
            <button onClick={handleClick} style={{margin: "1rem 1rem"}}>
                tablet
            </button>
            <button onClick={handleClick} style={{margin: "1rem 1rem"}}>
                smartphone
            </button>
            <button onClick={handleClick} style={{margin: "1rem 1rem"}}>
                notebook
            </button>
            {loading && <p>Carregando...</p>}
            {!loading && dados && <Product dados={dados}/>}
        </div>
    )
}

export default Exercicio4
