import './CartWidget.css';
import cartLogo from '../assets/cart.png';
import {useContext} from 'react';
import { cartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cart}=useContext(cartContext)
    const totalQuantity = cart.reduce((acc, val) => acc + val.quantity, 0)

    return(
        <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block':'none'}}>
            <img className='CartImg' src={cartLogo} alt='cart-widget'/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget