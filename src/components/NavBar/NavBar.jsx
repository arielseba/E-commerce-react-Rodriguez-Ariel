import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className="bg-yellow-300 h-32 flex justify-between shadow-inner sticky top-0">
            <div className="justify-center items-center ml-12 ">
                <Link to="/">
                    <img src="/logo.png" className="w-32" alt="logo" />{' '}
                </Link>
            </div>
            <ul className="w-96 text-white flex m-12 p-2 mr-48 font-bold ">
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
