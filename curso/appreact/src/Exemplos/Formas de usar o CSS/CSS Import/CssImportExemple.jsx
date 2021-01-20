// A forma mais simples de uso do CSS é 
// importando o mesmo direto no JavaScript. 
// A importação é efetuada pelo Webpack

import './CssImportExemple.css';

const CssImportExemple = () => {
  return (
    <div className="container">
      <p className="text">Meu site</p>
  </div>
  );
};

export default CssImportExemple;