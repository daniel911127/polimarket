import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./Detalle.css";

const images = require.context("../../images", true);
const Detalle = () => {
  console.log();
  return (
    <div className="container_detalles">
      <NavBar />
      <form className="barra_busqueda">
        <input
          type="text"
          placeholder=" 🔍 Que producto buscas?"
          onChange=""
        ></input>
        <button type="submit">Buscar</button>
      </form>
      <div className="container_prod">
        <div>
          <div className="product_detalles">
            <h1>CATEGORIAS</h1>
            <p>Carnes</p>
            <p>Pollos</p>
            <p>Mariscos</p>
            <p>Pescados</p>
          </div>
          <p>Descripcion</p>
          <p>Costilla de cerdo x 1000gr</p>
        </div>
        <div className="detalle_prod">
          <img src={images} alt="producto" />
          <p>$25.000</p>
          <p>costilla de cerdo</p>
          <p>Añadir al carrito</p>
        </div>
        <div>
          <input type="submit" value="Descuento 20%" className="descuento" />
          <div className="pesos">
            <p>unidad</p>
            <p>libra</p>
            <p>Kilogramo</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detalle;
