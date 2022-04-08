# Desafio 2

1. [ ] Organize o código em diferentes arquivos com type module
2. [ ] Crie 2 reducers, token e user
## Ações:

1. [ ] token/FETCH_STARTED, token/FETCH_SUCCESS, token/FETCH_ERROR
2. [ ] user/FETCH_STARTED, user/FETCH_SUCCESS, user/FETCH_ERROR
3. [ ] Crie constantes e action creators para cada ação
4. [ ] Crie middlewares: Thunk e localStorage
5. [ ] Com a api do curso de React, puxe o token:
6. [ ] o user pode ser { username: 'dog', password: 'dog' }
```
const response = await fetch(
  'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  },
);
const { token } = await response.json();
```

7. [ ] Com a api do curso de React, puxe o usuário:
```
const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
  method: 'GET',
  headers: {
    Authorization: 'Bearer ' + token,
  },
});
const data = await response.json();
```
8. [ ] A api deve ir dentro da action creator das funções assíncronas
9. [ ] Verifique se o token existe, caso exista dispare imediatamente
10. [ ] a função para puxar o usuário. Se não existir, dispare a
11. [ ] função para puxar o token e em seguida para puxar o usuário