import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget"
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {
    return(
        <nav className='navbar__container'>
            <Link to='/'>
                <h1>Innolab</h1>
            </Link>
            <div className='navbar__button_container'>
                <NavLink to="/servicios" className={({isActive})=> (isActive ? 'ActiveOpcion' : 'Opcion')}>Servicios</NavLink>
                <NavLink to="/category/cotizacion" className={({isActive})=> (isActive ? 'ActiveOpcion' : 'Opcion')}>Cotización</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar