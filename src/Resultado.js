function Nome({ peso, altura }) {
  const imcResult = (peso, altura) => {
    let imc = peso / (altura * altura);
    imc = imc.toFixed(2);
    return `Seu imc é de ${imc}`;
  };

  return (
    <>
      <p>{imcResult(peso, altura)}</p>
    </>
  );
}

export default Nome;
