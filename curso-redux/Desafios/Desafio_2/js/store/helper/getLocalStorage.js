const getLocalStorage = (key, initial) => {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    console.error("ERRO no getLocalStorage.js: ", error);
    return initial;
  }
};

export default getLocalStorage;
