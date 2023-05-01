import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./Carrito.css";
import CarritoItemCount from "../Carrito/CarritoItemCount";

const images = require.context("../../images", true);

const CarritoElement = () => {
  const { cart, setCart } = useContext(DataContext);

  const eliminarproducto = (id) => {
    const encontrarId = cart.find((item) => item.id === id);
    const carritoNuevo = cart.filter((item) => {
      return item !== encontrarId;
    });

    setCart(carritoNuevo);
  };
  return cart?.map((product) => {
    return (
      <div className="info_carrito" key={product.id}>
        <img src={images(product.imagen)} alt="producto en carrito" />
        <div>
          <p className="nombre_carrito">{product.nombre}</p>
          <p className="precio_carrito">${product.precioKilo} x Kilo</p>
        </div>
        <div className="precio_unidad">
          <p>Valor producto: ${product.precioKilo * product.cantidad} </p>
          <CarritoItemCount product={product} />
        </div>
        <p
          className="eliminar_producto"
          onClick={() => eliminarproducto(product.id)}
        >
          ❌
        </p>
      </div>
    );
  });
};

export default CarritoElement;
