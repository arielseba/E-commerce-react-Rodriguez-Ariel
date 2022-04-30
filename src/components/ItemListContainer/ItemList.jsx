// eslint-disable-next-line no-unused-vars
import { data } from 'autoprefixer'
import { useState, useEffect } from 'react'
import Data from '../../data/Data'
import Spinner from '../../UI/Spinner/Spinner'
import Item from './Item'

export const ItemList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Data)
            }, 5000)
        })
        getProducts
            .then((result) => {
                setProducts(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            {products.length === 0 ? (
                <Spinner />
            ) : (
                products.map((product, index) => (
                    <Item
                        key={index}
                        title={product.title}
                        description={product.description}
                        img={product.img}
                        price={product.price}
                    />
                ))
            )}
        </>
    )
}
