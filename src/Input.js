import React, { useState } from "react";
import Resultado from "../src/Resultado";
import "../src/css/input.css";

function Peso() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();

  return (
    <div className="container">
      <label>Digite seu peso</label>
      <input
        type="text"
        placeholder="Digite seu peso"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <label>Digite Sua altura</label>
      <input
        type="text"
        placeholder="Digite sua altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <Resultado peso={peso} altura={altura} />
    </div>
  );
}

export default Peso;
