import React from 'react'
import Checkbox from './Checkbox';

// Multiplos Checkbox

const CheckboxExemple2 = () => {
    const [fruta, setFruta] = React.useState([]);
    const [termos, setTermos] = React.useState([]);
  
    return (
      <form>
        <Checkbox
          options={['Roxo', 'Laranja', 'Verde']}
          value={fruta}
          setValue={setFruta}
        />
  
        <Checkbox
          options={['Termos e Condições']}
          value={termos}
          setValue={setTermos}
        />
      </form>
    );
}

export default CheckboxExemple2
