import Navbar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartWidget from './components/CartWidget/CartWidget'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/:category" element={<ItemListContainer />} />
                <Route
                    path="/:category/:id"
                    element={<ItemDetailContainer />}
                />
                <Route path="/Carrito" element={<CartWidget />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
