import { Link } from 'react-router-dom'

const ItemDetail = ({ id, img, description, title, price, stock }) => {
    return (
        <>
            <img src={img} alt="" className="w-3/12" />
            <div className="w-2/12 justify-center p-4 grid col-span-2">
                <h1 className="text-2xl text-blue-700">{title}</h1>
                <h6>{description}</h6>
                <br />
                <h5>$ {price}</h5>
                <Link to="/Carrito">
                    <button className=" mt-6 bg-blue-600 p-3 rounded-md text-xs text-white">
                        Terminar mi compra
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ItemDetail
