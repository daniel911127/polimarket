import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.jpeg'
import './Login.css'
import Footer from '../Footer/Footer'
import { FaUserAlt } from 'react-icons/fa'

const Login = () => {
  return (
    <div>
      <div className='logo_polimarket'>
        <Link to={"/"}>
          <img src={logo} alt='logo polimarket'/>
        </Link>
      </div>
      <div className='container_formulario'>
        <h1>Ingreso al sistema</h1>
        <form className='formulario'>
          <div className='formulario_input'>
            <div className='titulo_input'><FaUserAlt/></div>
            <input type='text' placeholder='Usuario'/>
          </div>
          <div className='formulario_input'>
            <div className='titulo_input'></div>
            <input type='password' placeholder='Contraseña'/>
          </div>
          <button>
            <Link to={"/admin"}>Ingresar</Link>
          </button>
        </form>

      </div>
      <Footer/>
    </div>
  )
}

export default Login