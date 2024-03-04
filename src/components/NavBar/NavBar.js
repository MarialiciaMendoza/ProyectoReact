import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget"
import {Link, NavLink} from "react-router-dom"

import logo from '../assets/logoinnolab.jpeg'

const NavBar = () => {
    return(
        <nav className='navbar__container'>
            <Link to='/'>
                <img src={logo} alt="Innolab Logo" className='logo'/>
            </Link>
            <div className='navbar__button_container'>
                <NavLink to="/servicios" className={({isActive})=> (isActive ? 'ActiveOpcion' : 'Opcion')}>Servicios</NavLink>
                <NavLink to="/cotizacion" className={({isActive})=> (isActive ? 'ActiveOpcion' : 'Opcion')}>Cotización</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar