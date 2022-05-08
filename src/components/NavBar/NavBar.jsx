import React from 'react'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className="bg-black h-32 flex justify-between shadow-inner sticky top-0">
            <img src="/logo.png" className="w-24 p-2 ml-10" alt="logo" />
            <ul className="w-96 text-blue-600 flex m-12 p-2 mr-48  font-bold">
                <li className="mr-12 hover:text-white">
                    <Link to="/">Home</Link>
                </li>
                <li className="mr-12 hover:text-white">
                    <Link to="/Accesorios">Accesorios</Link>
                </li>
                <div></div>
                <li className="mr-12 hover:text-white">
                    <Link to="/Alimentos">Alimentos</Link>
                </li>
                <li className="mr-12">
                    <Link to="/Snacks">Snacks</Link>
                </li>
                <li className="mr-12 hover:text-white">
                    <Link to="/Carrito">
                        <CartWidget />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
