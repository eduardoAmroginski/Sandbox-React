import React from "react";

class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    //Momento perfeito para se fazer um fetch e atualizar o estado usando this.setState
    console.log("Componente montado");
  }

  componentDidUpdate() {
    //Roda toda vez que o componente atualizar novamente
    console.log("Componente atualizado");
    document.title = this.state.contar;
  }

  componentWillUnmount() {
    //Roda antes que o componente saia da tela.
    console.log("saiu da tela");
    //Sempre que removermos um componente da tela, o estado se perde
  }

  handleClick() {
    this.setState((state) => ({
      contar: state.contar + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

export default Produtos;
