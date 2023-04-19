import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useState } from "react";
import "./Detalle.css";
import img0 from "../../images/costillaCerdo.jpg";

const Detalle = () => {
  const [busqueda, setBusqueda] = useState("");
  const cambioBusqueda = (e) => {
    setBusqueda(e.target.value);
    //console.log(e.target.value)
  };
  return (
    <div className="container_detalles">
      <NavBar />
      <form className="barra_busqueda">
        <input
          type="text"
          placeholder=" 🔍 Que producto buscas?"
          onChange={cambioBusqueda}
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
          <img src={img0} alt="producto" />
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
