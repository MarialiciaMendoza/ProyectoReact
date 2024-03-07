// En CartItem.js
const CartItem = ({ id, name, price }) => {
    return (
        <div>
            <p>{name}</p>
            <p>${price}</p>
            {/* Agrega más detalles según necesites */}
        </div>
    );
};

export default CartItem;
