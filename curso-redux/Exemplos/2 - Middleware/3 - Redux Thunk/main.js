const initialState = {
  loading: false,
  data: null,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_STARTED":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { loading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
}

const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

const { compose, applyMiddleware } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = Redux.createStore(reducer, enhancer);

// Forma geralmente não utilizada, pois não segue exatamente os padrões do Redux
// async function fetchUrl(dispatch, url) {
//   dispatch({ type: "FETCH_STARTED" });
//   try {
//     const data = await fetch(url).then((response) => response.json());
//     dispatch({ type: "FETCH_SUCCESS", payload: data });
//     console.log(data);
//   } catch (error) {
//     dispatch({ type: "FETCH_ERROR", payload: error.message });
//   }
// }

// fetchUrl(store.dispatch, "https://dogsapi.origamid.dev/json/api/photo");

// Action Creator que retorna uma função
function fetchUrl(url) {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_STARTED" });
    try {
      const data = await fetch(url).then((response) => response.json());
      dispatch({ type: "FETCH_SUCCESS", payload: data });
      console.log(data);
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };
}

store.dispatch(fetchUrl("https://dogsapi.origamid.dev/json/api/photo"));
