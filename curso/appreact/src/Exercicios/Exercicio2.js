// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const Exercicio2 = () => {
  return (
    <section>
      <h1>Exercicio 2</h1>
      {produtos
        .filter(({ preco }) => Number(preco.replace("R$ ", "")) > 1500)
        .map(({ id, nome, preco, cores }) => (
          <div key={id}>
            <h3>{nome}</h3>
            <p>Preço: R$ {preco}</p>
            <ul>
              {cores.map((cor) => (
                <li
                  key={cor}
                  style={{
                    backgroundColor: cor,
                    color: "white",
                  }}
                >
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default Exercicio2;
