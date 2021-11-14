import React, { useState } from "react";
import Result from "../src/Result";
import "../src/css/input.css";

function Input() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();

  return (
    <div className="container">
      <label>Digite seu peso</label>
      <input
        type="number"
        placeholder="Digite seu peso"
        required="required"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <label>Digite Sua altura</label>
      <input
        type="number"
        required="required"
        placeholder="Digite sua altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <Result peso={peso} altura={altura} />
    </div>
  );
}

export default Input;
