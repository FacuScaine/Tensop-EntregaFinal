import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';

import Clientes from './components/Clientes/Clientes.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import Empresa from './components/Empresa/Empresa.jsx';
import ItemListContainer from './components/CartLogica/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/clientes' element={<Clientes></Clientes>}></Route>
          <Route path='/contacto' element={<Contacto></Contacto>}></Route>
          <Route path='/empresa' element={<Empresa></Empresa>}></Route>
          <Route path='/productos' element={<ItemListContainer></ItemListContainer>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>

  );
}

export default App;
