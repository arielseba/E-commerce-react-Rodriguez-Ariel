import React from 'react'

const Item = ({ title, description, img, price }) => {
    return (
        <div className="w-2/12 border border-gray-300 shadow-xl mt-24 ml-24 justify-center grid row-span-4 items-center text-center p-2">
            <h1 className="m-2 text-xl">
                {' '}
                <strong>{title}</strong>
            </h1>
            <h2 className="m-2">{description}</h2>
            <img className="m-2" src={img} alt="img" />
            <h3 className="m-4 text-red-600 text-2xl">$ {price}</h3>
        </div>
    )
}

export default Item
