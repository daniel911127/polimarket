import React from "react";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./Admin.css";

const images = require.context("../../images", true);

const Productos = () => {
  const { data } = useContext(DataContext);
  return data?.map((product) => {
    return (
      <div className="card_admin" key={product.id}>
        <img src={images(product.imagen)} alt="producto" />
        <div className="admin_detalles">
          <div className="admin_titulo">{product.nombre}</div>
          <div className="admin_precios">
            <p>{product.descuento}</p>
            <p>{product.precioKilo}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default Productos;
