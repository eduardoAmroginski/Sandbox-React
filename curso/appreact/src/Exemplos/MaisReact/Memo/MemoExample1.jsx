import React from "react";
import Header from "./Components/Header";

const MemoExample1 = () => {
  const [contar, setContar] = React.useState(0);
  return (
    <div>
      <Header />
      <button
        onClick={() => {
          setContar(contar + 1);
        }}
      >
        {contar}
      </button>
    </div>
  );
};

export default MemoExample1;

// Utilizar o memo em componentes que não dependam de reatividade ou qualquer outro estado reativo do aplicativo
