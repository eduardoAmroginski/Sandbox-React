function getLocalhostStore(key, inicital) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    return inicital;
  }
}

const initialState = {
  loading: false,
  data: getLocalhostStore("data", null),
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

// Middleware
const localStorage = (store) => (next) => (action) => {
  const result = next(action);
  if (action.localStorage !== undefined) {
    console.log(action);
    window.localStorage.setItem(
      action.localStorage,
      JSON.stringify(action.payload)
    );
  }
  return result;
};

const { compose, applyMiddleware } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));

const store = Redux.createStore(reducer, enhancer);

// Action Creator que retorna uma função
function fetchUrl(url) {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_STARTED" });
    try {
      const data = await fetch(url).then((response) => response.json());
      dispatch({ type: "FETCH_SUCCESS", payload: data, localStorage: "data" });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };
}

const state = store.getState();

if (state.data === null) {
  store.dispatch(fetchUrl("https://dogsapi.origamid.dev/json/api/photo"));
}
