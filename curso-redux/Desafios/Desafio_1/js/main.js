import store from "./store/configureStore.js";
import {
  incrementarTempo,
  reduzirTempo,
  modificarEmail,
} from "./store/aluno.js";
import {
  completarAula,
  completarCurso,
  resetarCurso,
} from "./store/aula.js";

function countAulasCompletadas(aulas){
    const aulasCompletadas = aulas.filter(aula => aula.completa === true )
    return aulasCompletadas.length

}

function render() {
  const { aluno, aula } = store.getState();
  const nomeAluno = document.getElementById("nomeAluno");
  nomeAluno.innerHTML = aluno.nome;
  
  const emailAluno = document.getElementById("emailAluno");
  emailAluno.innerHTML = aluno.email;

  const tempoRestante = document.getElementById("tempoRestante");
  tempoRestante.innerHTML = aluno.diasRestantes;

  const aulasCompletas = countAulasCompletadas(aula)
  const aulasCompletadas = document.getElementById("aulasCompletadas");
  aulasCompletadas.innerHTML = aulasCompletas;

}
render();


store.subscribe(render);

//Alterações do aluno
store.dispatch(incrementarTempo());
store.dispatch(incrementarTempo());
store.dispatch(incrementarTempo());
store.dispatch(reduzirTempo());
store.dispatch(modificarEmail("eduardo-amroginski@gmail.com"));

// Alterações de aulas
store.dispatch(completarAula(2));
store.dispatch(resetarCurso());
store.dispatch(completarCurso());