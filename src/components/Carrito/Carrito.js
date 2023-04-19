import React from "react";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import img0 from "../../images/costillaCerdo.jpg";
import Footer from "../Footer/Footer";
import "./Carrito.css";

const Carrito = () => {
  const [busqueda, setBusqueda] = useState("");
  const cambioBusqueda = (e) => {
    setBusqueda(e.target.value);
  };
  return (
    <div>
      <NavBar />
      <form className="barra_busqueda">
        <input
          type="text"
          placeholder=" 🔍 Que producto buscas?"
          onChange={cambioBusqueda}
        ></input>
        <button type="submit">Buscar</button>
      </form>
      <div className="cart_container">
        <div className="imagenes_container">
          <div className="info_carrito">
            <img src={img0} alt="imagen de producto" />
            <div>
              <p>costillas de cerdo x 1000gr</p>
              <p>Peso:LB</p>
            </div>
          </div>
          <div className="info_carrito">
            <img src={img0} alt="imagen de producto" />
            <div>
              <p>costillas de cerdo x 1000gr</p>
              <p>Peso:LB</p>
            </div>
          </div>
          <div className="info_carrito">
            <img src={img0} alt="imagen de producto" />
            <div>
              <p>costillas de cerdo x 1000gr</p>
              <p>Peso:LB</p>
            </div>
          </div>
        </div>
        <div className="datos_carrito">
          <div className="datos">
            <p>Valor libra</p>
            <p>12.900</p>
          </div>
          <div className="datos">
            <p>Valor kilo</p>
            <p>25.000</p>
          </div>
          <div className="datos">
            <p>Valor unidad</p>
            <p>45.000</p>
          </div>
          <input type="submit" value="Pagar" className="pagar"></input>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Carrito;
