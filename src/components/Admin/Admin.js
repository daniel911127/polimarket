import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpeg";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import "./Admin.css";
import Footer from "../Footer/Footer";

const Admin = () => {
  const [busqueda, setBusqueda] = useState("");
  const cambioBusqueda = (e) => {
    setBusqueda(e.target.value);
    //console.log(e.target.value)
  };
  return (
    <div>
      <div className="container_admin">
        <div className="logo_admin">
          <Link to={"/"}>
            <img src={logo} alt="logo admin" />
          </Link>
          <div className="admin">
            <Link className="Nav_user" to={"/login"}>
              <FaRegUser />
            </Link>
            <p>admin</p>
          </div>
        </div>
        <form className="barra_admin">
          <input
            type="text"
            placeholder=" 🔍 Que producto buscas?"
            onChange={cambioBusqueda}
          ></input>
          <button type="submit">Buscar</button>
        </form>
        <div className="container_productos">
          <div className="product_admin">
            <h1>CATEGORIAS</h1>
            <p>Carnes</p>
            <p>Pollos</p>
            <p>Mariscos</p>
            <p>Pescados</p>
          </div>
          <div className="precios_admin">
            <div className="datos_admin">
              <p>Editar el valor del producto:</p>
              <p>Costilla de cerdo</p>
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
            </div>
          </div>
          <div className="botones_admin">
            <input type="submit" value="Añadir producto"></input>
            <input type="submit" value="Eliminar producto"></input>
            <input type="submit" value="Actualizar"></input>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
