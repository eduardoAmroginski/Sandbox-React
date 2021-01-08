import React from 'react'

// Checkbox de um item.

const CheckboxExemple = () => {
    const [termos, setTermos] = React.useState(false);


    return (
        <form>
            <label>
                <input type="checkbox"  value="Termos" checked={termos} 
                onChange={({target}) => setTermos(target.checked)}/>
                Aceito os termos.
            </label>
        </form>
    )
}

export default CheckboxExemple
