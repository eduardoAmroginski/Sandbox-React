function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;
    case "REDUZIR":
      return state - 1;
    default:
      return state;
  }
}

// Middleware, essas funções acontece antes da execução do reducer.
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("ACTION", action);
  console.log("PREVIOUSLY_STATE", store.getState());
  const result = next(action); //Executa a função reducer
  console.log("NEW_STATE", store.getState());
  console.groupEnd();
  return result; //sempre retornar o next() mesmo que ele seja executado antes do final do middleware
};

// Middleware 2
const MiddlewareReduzir = (store) => (next) => (action) => {
  if (action.type === "REDUZIR") {
    window.alert("REDUZIU!");
  }
  return next(action);
};

// Desestrutução das funções do Redux (não é necessário, podemos usar Redux.compose)
const { compose, applyMiddleware } = Redux;
// Verifica se __REDUX_DEVTOOLS_EXTENSION__COMPOSE__ existe, se nõa usa o compose puro.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Aplica o Middleware com o compose --- Permite a utilização de mais de um middleware
const enhancer = composeEnhancers(applyMiddleware(logger, MiddlewareReduzir));
// Utiliza a devTools + middleware como enhancer da store
const store = Redux.createStore(reducer, enhancer);

const middleware = Redux.applyMiddleware(logger);

store.dispatch({ type: "INCREMENTAR" });
store.dispatch({ type: "INCREMENTAR" });
store.dispatch({ type: "INCREMENTAR" });
store.dispatch({ type: "REDUZIR" });
