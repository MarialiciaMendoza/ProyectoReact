import './Item.css'
import {Link} from "react-router-dom"

const Item = ({id, title, price}) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{title}</h2>
            </header>
            <section>
                <p className="Info">Precio: ${price}</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item