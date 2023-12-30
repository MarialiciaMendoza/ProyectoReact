import './CartWidget.css';
import cart from './assets/cart.png'

const CartWidget = () => {
    return(
        <div className='cartwidget__container'>
            <div className='cartwidget__logo__container'>
                <img className='cartwidget__logo__img' src={cart} alt="cart-widget"/>
            </div>
            5
        </div>
    )
}

export default CartWidget