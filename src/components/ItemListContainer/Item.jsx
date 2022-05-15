import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ title, description, img, price, category, id }) => {
    return (
        <div className="w-2/12 border border-gray-300 shadow-xl mt-24 ml-24 justify-center grid row-span-4 items-center text-center p-2 rounded-xl">
            <Link to={`/${category}/${id}`}>
                <img src={img} alt="img" />
                <h1 className="text-xl">
                    {' '}
                    <strong>{title}</strong>
                </h1>{' '}
                <h2>{description}</h2>
                <h3 className="text-2xl">$ {price}</h3>
            </Link>
            <ItemCount />
            <Link to={`/${category}/${id}`}>
                {' '}
                <button className="rounded-md bg-yellow-400 text-white w-10/12 mt-4 p-2 mb-4">
                    Ver Detalle
                </button>
            </Link>
        </div>
    )
}

export default Item
