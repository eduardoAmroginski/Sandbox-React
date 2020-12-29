import React from "react";

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
      <h3>{nome}</h3>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
