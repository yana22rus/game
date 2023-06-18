import React from "react";

const Input = (props) => {
  return (
    <div>
      <input type="input" placeholder={props.placeholder} name={props.n} />
    </div>
  );
};

export default Input;
