import './ItemListContainer.css'
import {useState, useEffect} from 'react'
import {getProducts, getProductById} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const {categoryId} = useParams()
    const [products, setProducts] = useState([])

    useEffect (() => {
        const asyncFunc = categoryId ? getProductById : getProducts

        asyncFunc(categoryId)
            .then(response =>{
                setProducts (response)
            })
            .catch (error => {
                console.error(error)
            })
    }, [categoryId])

    return(
        <div className = "container__saludo">
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer