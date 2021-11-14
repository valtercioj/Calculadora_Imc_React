import React, { useState } from "react";
import '../src/css/result.css'

function Result({ peso, altura }) {
  const [imc, setImc] = useState();

  const imcResult = (peso, altura) => {
    peso = parseInt(peso);
    altura = parseFloat(altura);

    let imcValue = peso / (altura * altura);
    imcValue = imcValue.toFixed(2);

    if (
      isNaN(imcValue) ||
      typeof peso !== "number" ||
      typeof altura !== "number"
    ) {
      setImc();
    } else {
      setImc(`Seu imc é ${imcValue}`);
    }
  };

  return (
    <>
      <button onClick={() => imcResult(peso, altura)}>Calcular</button>
      <p>{imc}</p>
    </>
  );
}

export default Result;
