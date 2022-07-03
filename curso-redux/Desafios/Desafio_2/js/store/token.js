import getLocalStorage from "./helper/getLocalStorage.js";

// CONSTANTS
const TOKEN_FETCH_STARTED = "token/FETCH_STARTED";
const TOKEN_FETCH_SUCCESS = "token/FETCH_SUCCESS";
const TOKEN_FETCH_ERROR = "token/FETCH_ERROR";
const url = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";
// Actions Creator
export const tokenFetchStarted = () => ({ type: TOKEN_FETCH_STARTED });
export const tokenFetchSuccess = (payload) => ({
  type: TOKEN_FETCH_SUCCESS,
  payload,
  localStorage: "token",
});
export const tokenFetchError = () => ({ type: TOKEN_FETCH_ERROR, payload });

export const tokenFetch = (body) => async (dispatch) => {
  try {
    dispatch(tokenFetchStarted());
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const { token } = await response.json();
    dispatch(tokenFetchSuccess(token));
  } catch (error) {
    dispatch(tokenFetchError(error.message));
  }
};

//Initial State
const initialState = {
  loading: false,
  data: getLocalStorage("token", null),
  error: null,
};

//Reducer
function token(state = initialState, action) {
  switch (action.type) {
    case TOKEN_FETCH_STARTED:
      return { ...state, loading: true };
    case TOKEN_FETCH_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case TOKEN_FETCH_ERROR:
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default token;
