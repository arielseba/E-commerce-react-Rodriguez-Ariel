import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Data from '../../data/Data'
import Spinner from '../../UI/Spinner/Spinner'

const ItemDetailContainer = (props) => {
    const { id } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Data)
            }, 2000)
        })
        getProducts
            .then((result) => {
                setProducts(result)
                let aux = Data.filter((element) => element.id == id)
                setProducts(aux)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
    return (
        <>
            {!products.length > 0 ? (
                <Spinner />
            ) : (
                products.map((product, index) => (
                    <div className="flex justify-center mt-20 ">
                        <ItemDetail
                            key={index}
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            img={product.img}
                            price={product.price}
                            category={product.category}
                        />
                    </div>
                ))
            )}
        </>
    )
}
export default ItemDetailContainer
