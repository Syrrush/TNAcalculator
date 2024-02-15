/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function Calculator({ selectedCard }) {
  console.log(selectedCard);
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [resultado, setResultado] = useState(0);
  const handleNumero1Change = (event) => {
    setNumero1(Number(event.target.value));
  };

  const handleNumero2Change = (event) => {
    setNumero2(Number(event.target.value));
  };
  const resolve = () => {
    const amount = numero1 * Math.pow(1 + selectedCard.percent / 365, numero2);
    setResultado(amount);
  };
  return (
    <div className="p-4 dark:bg-gray-800 dark:text-gray-100 mr-20 sticky top-32 ">
      <h2 className="text-xl font-bold mb-4">
        Complete la información para {selectedCard?.name}
      </h2>
      <input
        type="number"
        placeholder="Ingrese su monto inicial"
        className="bg-gray-700 text-white rounded-lg input input-bordered input-primary w-full mb-4"
        value={numero1}
        onChange={handleNumero1Change}
      />
      <input
        type="number"
        placeholder="Ingrese los días que quiere tener el dinero"
        className=" bg-gray-700 text-white rounded-lg input input-bordered input-primary w-full mb-4"
        value={numero2}
        onChange={handleNumero2Change}
      />
      <button
        className=" bg-blue-500 hover:bg-blue-700 text-white btn btn-primary w-full mb-4"
        onClick={resolve}
      >
        Calcular
      </button>
      <p>
        Resultado: Dentro de {numero2} días, tendrá ${resultado.toFixed(2)}{" "}
        pesos
      </p>
      {resultado > 0 ? (
        <p>Ganancia: ${(resultado - numero1).toFixed(2)} pesos</p>
      ) : (
        ""
      )}
    </div>
  );
}
