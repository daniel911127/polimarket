import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Carrito.css";
import CarritoElement from "./CarritoElement";
import CarritoTotal from "./CarritoTotal";

const Carrito = () => {
  const { cart } = useContext(DataContext);

  return cart.length > 0 ? (
    <div>
      <NavBar />
      <form className="barra_busqueda">
        <input
          type="text"
          placeholder=" 🔍 Que producto buscas?"
          onChange=""
        ></input>
        <button type="submit">Buscar</button>
      </form>
      <CarritoElement />
      <CarritoTotal />
      <Footer />
    </div>
  ) : (
    <div>
      <NavBar />
      <form className="barra_busqueda">
        <input
          type="text"
          placeholder=" 🔍 Que producto buscas?"
          onChange=""
        ></input>
        <button type="submit">Buscar</button>
      </form>
      <CarritoElement />
      <div className="mensaje_carrito">
        <h1>Tu Carrito esta vacio, añade los productos que necesites.</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Carrito;
