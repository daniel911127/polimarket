import logo from '../../images/logo.jpeg'
import imgNav from '../../images/carneNavbar.jpg'
import { FaRegUser } from 'react-icons/fa'
import {FaRegHeart} from 'react-icons/fa'
import {BsCart3} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="Nav_container">
      <div className="Nav_logo">
        <Link to={"/"}>
          <img src={logo} alt='logo polimarket'/>
        </Link>
      </div>
      <div className='Nav_descuento'>
        <div className='Nav_promo'>
        <img src={imgNav} alt='carne de presentacion'/>
          <div><p>-10%</p></div>
          <p>POR COMPRAS SUPERIORES A $60.000</p>
        </div>
      </div>
      <div className='Nav_info'>
        <Link className='Nav_user' to={"/login"}>
          <FaRegUser/>
        </Link>
        <div className='Nav_like'>
          <FaRegHeart/>
        </div>
        <Link className='Nav_cart' to={"/cart"}>
          <BsCart3/>
          <div>
            <p>0</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NavBar