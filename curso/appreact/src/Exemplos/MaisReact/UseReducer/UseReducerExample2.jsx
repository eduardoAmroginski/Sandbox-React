import React from "react";

// Com o uso de useReducer

function reducer(state, action) {
  switch (action) {
    case "AUMENTAR":
      return state + 1;
    case "DIMINUIR":
      return state - 1;
    default:
      throw new Error("Erro action não existe");
  }

  //   if (action === "aumentar") {
  //     return state + 1;
  //   }
  //   if (action === "diminuir") {
  //     return state - 1;
  //   }
  //   return new Error("Erro action não existe");
}

const UseReducerExample2 = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch("AUMENTAR")}>+</button>
      <button onClick={() => dispatch("DIMINUIR")}>-</button>
      <p>{state}</p>
    </div>
  );
};

export default UseReducerExample2;
