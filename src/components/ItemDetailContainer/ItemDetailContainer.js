import './ItemDetailContainer.css'
import {useState, useEffect} from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

import {getDocs, doc, getFirestore} from 'firebase/firestore'

const db = getFirestore()

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    const [loading, setLoading] = useState (true)

    const {itemId} = useParams()

    useEffect (() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDocs(docRef)
            .then (response => {
                const data = response.data()
                const productsAdapted = {id: response.id, ...data}
                setProduct(productsAdapted)
            })
            .catch (error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer