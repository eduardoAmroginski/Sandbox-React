import React from 'react'
import { GlobalContext } from './GlobalContext';

const BtnLimpar = ({text}) => {
    const {limparDados} = React.useContext(GlobalContext);
    return (
        <button onClick={limparDados}>
            {text}
        </button>
    )
}

export default BtnLimpar
