import './ItemListContainer.css'
import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'

import {useParams} from 'react-router-dom'

import {getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../..'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect (() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, 'items'), where('category', '==', categoryId))
        : collection(db, 'items')

        console.log("COLLECTION", collectionRef)

        getDocs(collectionRef)
            .then(response => {
                console.log("ReSPONSE:",response)
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                console.log("PRODUCTS", productsAdapted)
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return(
        <div className="container__saludo">
            <h2>{greeting}</h2>
            {loading && (
                <p>Cargando servicios...</p>
            )}
            <ItemList products = {products}/>
        </div>
    )
}

export default ItemListContainer