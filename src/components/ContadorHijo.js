import React, { memo, useMemo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  // let superNumero = 0;

  // for (let i = 0; i < 1000000000; i++) {
  //   superNumero++;
  // }

  const superNumero = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }
    return numero;
  }, []);

  console.log("Hijo contador se renderiza");
  return (
    <div style={{ border: "thin solid #000", margin: "1rem", padding: "1rem" }}>
      <h2>Hijo del Contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
};
//export default ContadorHijo;
export default memo(ContadorHijo);
