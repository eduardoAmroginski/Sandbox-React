import React from 'react'

import './ExempleCssAnimation.css'

import Produto from './Components/Produto'


const ExemploCssAnimation = () => {

    const [ativar, setAtivar] = React.useState(false);

    return (
        <div>
            <button onClick={() => setAtivar(!ativar)}>Ativar</button>
            {ativar && <Produto />}
        </div>
    )
}

export default ExemploCssAnimation
