import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  margin: "10px", //Caso não seja passada nenhuma margem, será usado a margem definida aqui como padrão
};

Button.propTypes = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.string,
};

export default Button;
