import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form() {
  return (
    <form>
      <Input id="email" label="Email" required />
      <Input id="pwd" type="password" label="Password" />
      <Button />
    </form>
  );
}

export default Form;
