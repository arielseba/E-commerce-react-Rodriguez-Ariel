import React, { useContext } from 'react'
import CartContextProvider, { CartContext } from '../../CartContext/CartContext'
import ItemCart from './ItemCart'

const Cart = () => {
    const { items } = useContext(CartContext)
    console.log(items)
    return (
        <>
            <CartContextProvider>
                <div className="bg-red-600 text-white">
                    ids de carrito {items}
                </div>
                <div className="justify-center items-center mt-6">
                    <ItemCart />
                    <button className="bg-yellow-300 text-white p-3 m-2 rounded-lg ">
                        Finalizar Compra
                    </button>
                    <button className="bg-yellow-300 text-white p-3 m-2 rounded-lg">
                        Vaciar Carrito
                    </button>
                </div>
            </CartContextProvider>
        </>
    )
}

export default Cart
