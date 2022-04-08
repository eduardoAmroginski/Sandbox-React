import aluno from "./aluno.js"
import aula from "./aula.js"

const reducer = Redux.combineReducers({aluno, aula})

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store