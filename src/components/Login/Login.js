import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpeg";
import "./Login.css";
import Footer from "../Footer/Footer";
import { FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Login = () => {
  const { admin, body, setBody } = useContext(DataContext);

  console.log(admin);

  const handleChange = (e) => {
    console.log(e.target.value);
    setBody({ ...body, [e.target.name]: e.target.value });
  };
  function handleSubmit() {
    console.log(body);
  }
  return (
    <div>
      <div className="logo_polimarket">
        <Link to={"/"}>
          <img src={logo} alt="logo polimarket" />
        </Link>
      </div>
      <div className="container_formulario">
        <h1>Ingreso al sistema</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="formulario_input">
            <div className="titulo_input">
              <FaUserAlt />
            </div>
            <input
              type="text"
              placeholder="Usuario"
              name="usuario"
              value={body.usuario}
              onChange={handleChange}
            />
          </div>
          <div className="formulario_input">
            <div className="titulo_input"></div>
            <input
              type="password"
              placeholder="Contraseña"
              name="contraseña"
              value={body.contraseña}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="login_button">
            <Link to={"/"}>Ingresar</Link>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
