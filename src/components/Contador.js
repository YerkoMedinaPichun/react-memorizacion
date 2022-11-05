import React from "react";
import { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // const sumar = () => {
  //   setContador(contador + 1);
  // };

  // const restar = () => {
  //   setContador(contador - 1);
  // };

  const sumar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  const restar = useCallback(() => {
    setContador(contador - 1);
  }, [contador]);

  return (
    <div>
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
      </nav>
      <h3>{contador}</h3>
      <input type="text" onChange={handleInput} value={input} />
      {/* <ContadorHijo />
      
      <ContadorHijo contador={contador} /> */}
      <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
    </div>
  );
};

export default Contador;
