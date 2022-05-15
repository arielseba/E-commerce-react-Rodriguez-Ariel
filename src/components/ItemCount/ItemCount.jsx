import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({ cantidad }) => {
    const [count, setCount] = useState(1)
    const [total, setTotal] = useState(0)

    const onAdd = () => {
        setCount(count + 1)
    }
    const onRest = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className="flex items-center justify-around">
                <button
                    className="rounded-md bg-yellow-400 text-white w-2/12 text-2xl"
                    onClick={onAdd}
                >
                    +
                </button>
                <span>{count}</span>
                <button
                    className="rounded-md bg-yellow-400 text-white w-2/12 text-2xl"
                    onClick={onRest}
                >
                    -
                </button>
            </div>
        </>
    )
}

export default ItemCount
