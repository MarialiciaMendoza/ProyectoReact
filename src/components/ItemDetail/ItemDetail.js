import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, descripcion, price}) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <section>
                <p className="Info">Descripcion: {descripcion}</p>
                <p className="Info">Precio: ${price}</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={100} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail