import { useContext } from "react";
import { cartContext } from "../../context/CartContext";

import {useState} from 'react';
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore";

import CheckoutForm from '../Checkout/CheckoutForm'

import { db } from "../..";

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(cartContext)

const createOrder = async ({name, phone, email}) => {
    setLoading(true)

    try{
        const objOrder = {
            buyer: {
                name, phone, email
            },
            items: cart,
            total: total,
            date: Timestamp.fromDate(new Date ())
        }
        const batch = writeBatch(db)

        const outOfStock =[]

        const ids = cart.map(prod => prod.innerId)

        console.log("IDS", ids)

        const productsRef = collection(db, 'products')

        const productsAdaptedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

        const {docs} = productsAdaptedFromFirestore

        docs.forEach(doc =>{
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock
            
            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.Quantity

            if(stockDb >= prodQuantity){
                batch.update(doc.ref, {sotck: stockDb - prodQuantity})
            } else {
                outOfStock.push({id: doc.id, ...dataDoc})
            }
        })
        if(outOfStock.length === 0){
            await batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
            clearCart()
        } else {
            console.error('hay productos fuera de stock')
        }
    } catch (error){
        console.log(error)
    } finally {
        setLoading(false)
    }
}

    if (loading){
        return <h1>Se está generando tu orden...</h1>
    }

    if (orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm = {createOrder}/>
        </div>
        )
    }

export default Checkout