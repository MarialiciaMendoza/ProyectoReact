import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav className='navbar__container'>
            <h1>Innolab</h1>
            <div className='navbar__button_container'>
                <a className='navbar__button' href='/'>Nosotros</a>
                <a className='navbar__button' href='/'>Servicios</a>
                <a className='navbar__button' href='/'>Equipo</a>
                <a className='navbar__button' href='/'>Cotización</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar