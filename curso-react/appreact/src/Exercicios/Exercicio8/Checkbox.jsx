import React from "react";

const Checkbox = ({ options, value, setValue }) => {
    function handleChange({ target }) {
      if (target.checked) {
        setValue([...value, target.value]);
      } else {
        setValue(value.filter((cor) => cor !== target.value));
      }
    }
  
    return (
      <>
        {options.map((option, index) => (
          <label key={index} style={{textTransform:"capitalize"}}>
            <input
              type="checkbox"
              value={option}
              checked={value.includes(option)}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </>
    );
  };
  
  export default Checkbox;