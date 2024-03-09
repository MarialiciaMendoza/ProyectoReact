import {createContext, useState, useContext} from "react"

export const cartContext = createContext({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    console.log("CART IN CART CONTEXT", cart)

    const addItem = (item, quantity) => {
        console.log("ITEMS IN CART CONTEXT", cart, item, quantity)
        if (!isInCart(item.id)){
            setCart( prev => [...prev, {...item,quantity}] )
            console.log("CART POST ADDED", cart)
        } else{
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod=>prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = cart.reduce((acc, val) => acc + val.quantity, 0)

    const total = cart.reduce((acc, val) => acc + (val.price * val.quantity), 0)

    return(
        <cartContext.Provider value = {{cart, totalQuantity, total, addItem, removeItem, clearCart}}>
            {children}
        </cartContext.Provider>
    )
}