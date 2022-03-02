# Desafio 1

Usando o Redux (pode usar Immer ou Não).
Crie uma store contendo os estados iniciais abaixo

#### Crie as seguintes ações:

1. [x] aluno/INCREMENTAR_TEMPO, adiciona 1 dia de acesso
2. [x] aluno/REDUZIR_TEMPO, reduz 1 dia de acesso
3. [x] aluno/MODIFICAR_EMAIL(email), modifica o email do usuário
4. [x] aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
5. [x] aulas/COMPLETAR_CURSO, completa todas as aulas
6. [x] aulas/RESETAR_CURSO, reseta todas as aulas completas
7. [x] Crie constantes e action creators para as ações.
8. [x] Crie um reducer para aluno e um para aulas.
9. [ ] Renderize na tela o nome, email, tempo restante e o total de aulas completas
10. [ ] Configure a DevTools

```
const aluno = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

const aulas = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

```
