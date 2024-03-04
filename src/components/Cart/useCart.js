import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

export const useCart = () => {
    const ctx = useContext(cartContext)
    return {
        ...ctx
    }
}