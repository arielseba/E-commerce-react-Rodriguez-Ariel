import { createContext, useState } from 'react'

export const CartContext = createContext({
    items: [],
    addToCart: () => {},
})

const CartContextProvider = ({ children }) => {
    const [itemsCart, setItemsCart] = useState([])

    const addToCart = (itemId) => {
        setItemsCart((currentCart) => {
            return currentCart.concat(itemId)
        })
    }
    const deleteToCart = (itemsId) => {
        setItemsCart((currentCart) => {
            return currentCart - itemsId //esta mal hay que corregirlo
        })
    }

    const context = {
        itemsCart,
        addToCart,
        deleteToCart,
    }

    return (
        <CartContext.Provider value={context}> {children}</CartContext.Provider>
    )
}

export default CartContextProvider
