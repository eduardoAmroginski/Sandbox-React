import React from 'react'
import useFetch from './Hooks/useFetch';
import useLocalStorage from './Hooks/useLocalStorage';

const CustomHook = () => {
    const [product, setProduct] = useLocalStorage("product", "");
    const {request, data, loading, error} = useFetch();

    const handleClick = ({target}) => {
        setProduct(target.innerText);
    }

    React.useEffect(() => {
        async function fetchData() {
            const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
            console.log(response, json)
        }
        fetchData();
    }, [request]);
    
    if(error) return <p>{error}</p>
    if(loading) return <p>Carregando...</p>
    if(data){
        return (
            <>
                <h1>Preferencia: {product}</h1>
                <button style={{margin: ".5rem"}} onClick={handleClick}>notebook</button>
                <button style={{margin: ".5rem"}} onClick={handleClick}>smartphone</button>
            
            {data.map((produto) => (<div key={produto.id}><h1>{produto.nome}</h1></div>))}
            
            </>
        )
    }else{
        return null
    }
}

export default CustomHook
