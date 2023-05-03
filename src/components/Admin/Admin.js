import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpeg";
import { FaRegUser } from "react-icons/fa";
import "./Admin.css";
import Footer from "../Footer/Footer";
import Productos from "./Productos";
import { DataContext } from "../Context/DataContext";

const Admin = () => {
  const { anadir, setAnadir, data, setData } = useContext(DataContext);
  const handleChange = (e) => {
    setAnadir({ ...anadir, [e.target.name]: e.target.value });
  };
  console.log(data, anadir);
  const productos = (e) => {
    setData(...data, anadir);
    console.log(data);
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
          <input type="text" placeholder=" 🔍 Que producto buscas?"></input>
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
              <input
                className="datos"
                type="number"
                placeholder="id producto"
                name="id"
                value={anadir.id}
                onChange={handleChange}
              />

              <input
                className="datos"
                type="text"
                placeholder="nombre"
                name="nombre"
                value={anadir.nombre}
                onChange={handleChange}
              />

              <input
                className="datos"
                type="text"
                placeholder="imagen"
                name="imagen"
                value={anadir.imagen}
                onChange={handleChange}
              />

              <input
                className="datos"
                type="text"
                placeholder="categoria"
                name="categoria"
                value={anadir.categoria}
                onChange={handleChange}
              />

              <input
                className="datos"
                type="number"
                placeholder="precioKilo"
                name="precioKilo"
                value={anadir.precioKilo}
                onChange={handleChange}
              />

              <input
                className="datos"
                type="number"
                placeholder="precioLibra"
                name="precioLibra"
                value={anadir.precioLibra}
                onChange={handleChange}
              />

              <input
                className="datos"
                type="number"
                placeholder="precioUnidad"
                name="precioUnidad"
                value={anadir.precioUnidad}
                onChange={handleChange}
              />

              <input
                className="datos"
                type="number"
                placeholder="cantidad"
                name="cantidad"
                value={anadir.cantidad}
                onChange={handleChange}
              />

              <input
                className="datos"
                type="number"
                placeholder="descuento"
                name="descuento"
                value={anadir.descuento}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="botones_admin">
            <input
              type="submit"
              value="Añadir producto"
              onSubmit={productos}
            ></input>
            <input type="submit" value="Eliminar producto"></input>
            <input type="submit" value="Actualizar"></input>
          </div>
        </div>
      </div>
      <div className="admin_product">
        <Productos />
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
