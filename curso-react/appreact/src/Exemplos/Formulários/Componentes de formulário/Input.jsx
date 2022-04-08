import React from 'react'

const Input = ({id, label, value, setValue, ...props}) => {
    return (
        <>
            <label  htmlFor={id}>{label}</label>  
            <input type="text" id={id} 
                name={id}
                value = {value}
                onChange={({target}) => setValue(target.value)}
                {...props} 
            />
        </>
    )
}

export default Input
