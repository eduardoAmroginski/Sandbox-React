// CONSTS
const USER_FETCH_STARTED = "user/FETCH_STARTED";
const USER_FETCH_SUCCESS = "user/FETCH_SUCCESS";
const USER_FETCH_ERROR = "user/FETCH_ERROR";
const url = "https://dogsapi.origamid.dev/json/api/user";

// Actions Creator
export const userFetchStarted = () => ({ type: USER_FETCH_STARTED });
export const userFetchSuccess = (payload) => ({
  type: USER_FETCH_SUCCESS,
  payload,
});
export const userFetchError = () => ({ type: USER_FETCH_ERROR, payload });

export const userFetch = (token) => async (dispatch) => {
  try {
    dispatch(userFetchStarted());
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    dispatch(userFetchSuccess(data));
  } catch (error) {
    dispatch(userFetchError(error.message));
  }
};

// Initial State
const initialState = {
  loading: false,
  data: null,
  error: null,
};

// Reducer
function user(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_STARTED:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case USER_FETCH_ERROR:
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default user;
