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
const user = immer.produce((state, action) => {
  switch (action.type) {
    case USER_FETCH_STARTED:
      state = { ...state, loading: true };
      break;
    case USER_FETCH_SUCCESS:
      state = { data: action.payload, loading: false, error: null };
      break;
    case USER_FETCH_ERROR:
      state = { data: null, loading: false, error: action.payload };
      break;
  }
}, initialState);

export default user;
