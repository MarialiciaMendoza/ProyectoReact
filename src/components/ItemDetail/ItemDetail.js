import './ItemDetail.css'
import {useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

import { cartContext } from "../../context/CartContext";

const ItemDetail = ({innerId, id, title, descripcion, price}) => {
    const {addItem} = useContext(cartContext)

    const [quantityAdded, setQuantityAdded]=useState (0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price, innerId
        }
        
        addItem(item, quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <section>
                <p className="Info">Descripcion: {descripcion}</p>
                <p className="Info">Precio: ${price}</p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Finalizar</Link>
                    ):(
                        <ItemCount initial={1} stock={100} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail