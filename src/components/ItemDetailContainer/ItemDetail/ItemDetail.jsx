import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../CartContext/CartContext'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({ id, img, description, title, price, stock }) => {
    const [cart, setCart] = useState(false)

    const { addToCart } = useContext(CartContext)

    const onAdd = () => {
        alert('Producto agregado con exito')
        setCart(true)
        addToCart(id)
    }

    return (
        <>
            <div className="border border-green-500 grid grid-cols-6 gap-24 w-8/12">
                <img src={img} alt="" className="col-span-3 m-10" />
                <div className="justify-center p-4 grid col-span-3">
                    <h1 className="text-2xl mt-10 text-blue-700">{title}</h1>
                    <h6 className="text-xl">{description}</h6>
                    <h5 className="text-orange-600 text-2xl">$ {price}</h5>
                    <div>
                        <ItemCount />
                        {!cart ? (
                            <button
                                className="text-white bg-yellow-400 p-2 mt-8 w-full rounded-lg"
                                onClick={onAdd}
                            >
                                Agregar al carrito
                            </button>
                        ) : (
                            <>
                                <Link to="/">
                                    <button className="text-white bg-yellow-400 p-2 mt-8 w-full rounded-lg">
                                        Seguir Comprando
                                    </button>
                                </Link>
                                <Link to="/carrito">
                                    <button className="text-white bg-green-400 p-2 mt-4 w-full rounded-lg">
                                        Terminar mi compra
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
