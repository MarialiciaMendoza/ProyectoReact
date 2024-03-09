import './ItemDetailContainer.css'
import {useState, useEffect} from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

import {getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../..'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    const [loading, setLoading] = useState (true)

    const {itemId} = useParams()

    useEffect (() => {
        setLoading(true)

        // const docRef = doc(db, 'products', itemId)
        console.log("ITEMS ID", itemId)
        const docRef = collection(db, 'items')
        const q = query(docRef, where("slug", "==", `servicio-${itemId}`))

        getDocs(q)
            .then (response => {
                const data = response.docs
                console.log("RESPONSE DATA", data)
                if (data.length > 0) {
                    const productAdapted = {innerId: data[0].id, ...data[0].data()}
                    setProduct(productAdapted)
                }
            })
            .catch (error => {
                console.error("ERROR", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            {
                loading && (
                    <p>Cargando producto...</p>
                )
            }
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer