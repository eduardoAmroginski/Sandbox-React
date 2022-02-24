import React from "react";
import Produtos from "./Produtos";

const ClassesExample1 = () => {
  const [ativar, setAtivar] = React.useState(true);

  return (
    <div>
      {ativar && <Produtos titulo="Esses são os produtos" />}
      <button onClick={() => setAtivar(!ativar)}>Toggle</button>
    </div>
  );
};

export default ClassesExample1;
