import React from 'react'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
    return (
        <div className="bg-black h-32 flex justify-between shadow-inner sticky top-0">
            <img src="/logo.png" className="w-24 p-2 ml-10" alt="logo" />
            <ul className="w-96 text-blue-600 flex m-12 p-2 font-bold">
                <li className="mr-12 hover:text-white">
                    <a href="/">Home</a>
                </li>
                <li className="mr-12 hover:text-white">
                    <a href="/">Productos</a>
                </li>
                <div></div>
                <li className="mr-12 hover:text-white">
                    <a href="/">Nosotros</a>
                </li>
                <li className="hover:text-white">
                    <a href="/">
                        <CartWidget />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
