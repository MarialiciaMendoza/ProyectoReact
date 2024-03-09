// En CartItem.js
const CartItem = ({ id, title, price, quantity }) => {
    return (
        <div>
            <p>{title}</p>
            <p>${price}</p>
            <p>{quantity}</p>
            {/* Agrega más detalles según necesites */}
        </div>
    );
};

export default CartItem;
