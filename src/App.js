import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './context/CartContext';

import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';

import Clientes from './components/Clientes/Clientes.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import Empresa from './components/Empresa/Empresa.jsx';
import Productos from './components/Productos/Productos';
import ItemDetailContainer from './components/CartLogica/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/CartLogica/Cart/Cart';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/clientes' element={<Clientes></Clientes>}></Route>
            <Route path='/contacto' element={<Contacto></Contacto>}></Route>
            <Route path='/empresa' element={<Empresa></Empresa>}></Route>
            <Route path='/productos' element={<Productos></Productos>}></Route>
            <Route path='/productos/:categoriaID' element={<Productos></Productos>}></Route>
            <Route path='/detalle/:productoID' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
          </Routes>
        </CartProvider>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
