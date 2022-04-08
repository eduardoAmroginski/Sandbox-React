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
  token: getLocalStorage("token", null),
  error: null,
};

//Reducer
const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case TOKEN_FETCH_STARTED:
      state = { ...state, loading: true };
      break;
    case TOKEN_FETCH_SUCCESS:
      state = { loading: false, token: action.payload, error: null };
      break;
    case TOKEN_FETCH_ERROR:
      state = { loading: false, error: action.payload, token: null };
      break;
  }
}, initialState);

export default reducer;
