import React from 'react'
import DogSvg from './DogSvg'


// Componentes SVG

const CssImagesExemple3 = () => {

    const [olho, setOlho] = React.useState(2);


    function handleClick(){
        for(let i = 2; i < 6; i ++){
            setTimeout(()=>{
                setOlho(i);
            }, 100 * i)
        }
    }


    return (
        <div>
            <DogSvg color="#84e" olho={olho}/>
            <p onClick={handleClick}>Click aqui</p>
        </div>
    )
}

export default CssImagesExemple3
