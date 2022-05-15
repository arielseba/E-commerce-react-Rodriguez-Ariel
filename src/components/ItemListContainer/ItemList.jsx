// eslint-disable-next-line no-unused-vars
import { data } from 'autoprefixer'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Data from '../../data/Data'
import Spinner from '../../UI/Spinner/Spinner'
import Item from './Item'

export const ItemList = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [spineer, setSpinner] = useState()

    useEffect(() => {
        setSpinner(true)
        const getProducts = new Promise((resolve, reject) => {
            resolve(Data)
        })
        getProducts
            .then((result) => {
                let aux = Data.filter((element) => element.category == category)
                if (category !== undefined) {
                    setProducts(aux)
                } else {
                    setProducts(Data)
                }
                setTimeout(() => {
                    setSpinner(false)
                }, 500)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [category])
    return (
        <>
            {spineer ? (
                <Spinner />
            ) : (
                products.map((product, index) => (
                    <Item
                        key={index}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        img={product.img}
                        price={product.price}
                        category={product.category}
                    />
                ))
            )}
        </>
    )
}
