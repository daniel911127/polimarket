import React from "react";
import { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import "./Card.css";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

const images = require.context("../../images", true);
function Card() {
  const { data, compra, detalle, setDetalle } = useContext(DataContext);

  const detalleProd = (product) => {
    setDetalle([product]);
  };
  return data?.map((product) => {
    return (
      <div className="card_carrito" key={product.id}>
        <div className="card_header">
          <div>
            <AiFillHeart />
          </div>
          <div> Descuentos</div>
        </div>
        <button className="imagen_button" onClick={() => detalleProd(product)}>
          <Link className="card_imagen" to={"./detalle"}>
            <img src={images(product.imagen)} alt="producto" />
          </Link>
        </button>

        <div className="card_detalles">
          <div className="card_titulo">{product.nombre}</div>
          <div className="card_precios">
            <p>{product.descuento}</p>
            <p>{product.precioKilo}</p>
          </div>
          <p className="card_gramo">gramo a $20,14</p>
        </div>

        <button className="card_button" onClick={() => compra(product)}>
          <BsCart3 />
          añadir al carrito
        </button>
      </div>
    );
  });
}

export default Card;
