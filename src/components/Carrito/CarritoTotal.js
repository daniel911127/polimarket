import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./Carrito.css";

const CarritoTotal = () => {
  const { cart } = useContext(DataContext);
  const total = cart.reduce(
    (acc, prod) => acc + prod.precioKilo * prod.cantidad,
    0
  );

  return (
    <div className="carrito_total">
      <div className="carrito_precio">
        <p>total: ${total}</p>
      </div>
      <div className="carrito_pagar">
        <button className="pagar">Pagar</button>
      </div>
    </div>
  );
};

export default CarritoTotal;
