import Navbar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './components/CartWidget/Cart'
import CartContextProvider from './CartContext/CartContext'

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />e
                    <Route path="/:category" element={<ItemListContainer />} />
                    <Route
                        path="/:category/:id"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/Carrito" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App
