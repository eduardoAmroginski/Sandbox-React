// CONSTANTS
const INCREMENTAR_TEMPO = "aluno/INCREMENTAR_TEMPO";
const REDUZIR_TEMPO = "aluno/REDUZIR_TEMPO";
const MODIFICAR_EMAIL = "aluno/MODIFICAR_EMAIL";
const COMPLETAR_AULA = "aluno/COMPLETAR_AULA";

// Actions Creator
export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (payload) => ({ type: MODIFICAR_EMAIL, payload });
export const completaAula = (payload) => ({ type: COMPLETAR_AULA, payload });

const initialState = {
  nome: "Eduardo Amroginski",
  email: "eduardo@origamid.com",
  diasRestantes: 120,
};

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes += 1;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes -= 1;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
  }
}, initialState);

export default reducer;
